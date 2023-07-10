import { getJSON } from "./ServiceUtils.js";
import { member } from "./LoginService.js";

const ENDPOINT = `/api/members`;
const EXPIREAFTER = 60 * 60 * 1000;

let EXPIRESAT = 0;
const getCache = (() => {
	let members = null;
	return async () => {
		if (members == null || EXPIRESAT < Date.now()) {
			members = loadMembers();
			EXPIRESAT = Date.now() + EXPIREAFTER;
		}
		return await members;
	}
})();

const loadMembers = async () => {
	const members = new Map();
	const response = (await getJSON(ENDPOINT)).data;
	for (const member of response)
		members.set(`${member.id}`, member);

	return members;
}

export const currentMember = async () => {
	return member();
};

export const getMembers = async () => {
	const cache = await getCache();
	const members = Array.from(cache.values());
	return members.sort((a, b) => {
		if (a.name.toLowerCase() < b.name.toLowerCase())
			return -1;
		if (a.name.toLowerCase() > b.name.toLowerCase())
			return 1;
		return 0;
	});
};

export const getMember = async (memberid) => {
	const cache = await getCache();
	return cache.get(`${memberid}`);
}