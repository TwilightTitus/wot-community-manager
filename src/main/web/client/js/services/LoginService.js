import { APPGLOBAL, PAGEURL, URL_LOGIN, URL_ACCESS } from "../Constants.js";
import { loadValue, storeValue, deleteValue } from "./LocalStorageService.js";

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const DAY = 24 * 60 * MINUTE;

const STORAGE_ITEM__LOGIN = "cached-login";

let isloggedIn = false;
let ACCESSRIGHTS = {};
let MEMBER;
let ACCESSTOKEN;
let EXPIREAT;

const isExpired = (expireAt = 0) => {
	if (expireAt - (Date.now() + DAY) < 0)
		return true;

	return false;
}

const access = async () => {

	let response = await fetch(new URL(URL_ACCESS, location));
	if (response.status == 401) return false;
	if (response.status == 403) return null;

	response = await response.json();
	storeValue(STORAGE_ITEM__LOGIN, response);

	const { member, accessToken, expireAt, accessRights } = response;
	
	if (isExpired(expireAt))
		return false;
	
	MEMBER = member;
	ACCESSTOKEN = accessToken;
	EXPIREAT = expireAt;
	ACCESSRIGHTS = accessRights;

	APPGLOBALS.member = MEMBER
	APPGLOBALS.accessRights = ACCESSRIGHTS;

	scheduleNexAccessTokenRefresh();

	return true;
};

const cachedLogin = async () => {
	const cachedLogin = loadValue(STORAGE_ITEM__LOGIN);
	if (!cachedLogin)
		return false;

	const { member, accessToken, expireAt } = cachedLogin;

	if (isExpired(expireAt)){
		deleteValue(STORAGE_ITEM__LOGIN);
		return false;
	}

	const url = new URL(URL_LOGIN, location);
	const params = url.searchParams;
	params.set("status", "ok");
	params.set("access_token", accessToken);
	params.set("account_id", member.id);
	params.set("expires_at", expireAt - Date.now());

	await fetch(url);
};

const scheduleNexAccessTokenRefresh = () => {
	const timeOffset = EXPIREAT - (Date.now() + MINUTE);

	setTimeout(async () => {
		await access();
	}, timeOffset);
};

export const login = async () => {
	if (!isloggedIn) {
		await cachedLogin();
		if (!await access()) {
			location.href = new URL(URL_LOGIN, location).toString();
			return false;
		}

		isloggedIn = true;
	}

	return MEMBER;
};

export const fullAccessData = () => {
	return {
		accessToken: ACCESSTOKEN,
		expireAt: EXPIREAT,
		member: MEMBER,
		accessRights: ACCESSRIGHTS
	}
}

export const accessRights = () => {
	return ACCESSRIGHTS;
}

export const member = () => {
	return MEMBER;
}

export const accessToken = () => {
	return ACCESSTOKEN;
}


