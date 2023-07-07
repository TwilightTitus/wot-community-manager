import { getJSON, postJSON, deleteJSON } from "./ServiceUtils.js";
import { member } from "./LoginService.js";

const ENDPOINT = (campaign) => `/api/campaigns/${campaign}/registrations`;
const ENDPOINTBYMEMBER = (campaign, member) => `${ENDPOINT(campaign)}/${member}`;

const CACHE = new Map();

const clearCache = (campaign) => {
	CACHE.set(`${campaign}`, new Map());
}

const getCachedRegistrations = (campaign, create = false) => {
	const key = `${campaign}`;
	let registrations = CACHE.get() || null;
	if (!registrations && create) {
		registrations = new Map();
		registrations.fullloaded = false;
		CACHE.set(key, registrations);
	}

	return registrations;
}

const getCachedRegistration = (campaign, member) => {
	const registrations = getCachedRegistrations(campaign);
	if (registrations)
		return registrations.get(member);

	return null;
}

const cacheRegistration = (registration, cache) => {
	if (!registration) return;
	const { campaignid, memberid } = registration;
	const registrations = cache || getCachedRegistrations(campaignid, true);
	registrations.set(memberid, registration);
}

export const getRegistrations = async (campaign) => {
	const registrations = getCachedRegistrations(campaign, true);
	if (!registrations.fullloaded) {
		const response = (await getJSON(ENDPOINT(campaign))).data;
		for (const registration of response)
			cacheRegistration(registration, registrations);

		registrations.fullloaded = true;
	}

	return Array.from(registrations.values());;
}

export const storeRegistration = async (campaign, registration) => {
	registration = await postJSON(ENDPOINT(campaign), registration);
	cacheRegistration(registration);
	return registration;
}

export const getMyRegistration = async (campaign) => {
	return getRegistrationByMember(campaign, member().id);
}

export const getRegistrationByMember = async (campaign, member) => {
	let registration = getCachedRegistration(campaign, member);
	if (!registration) {
		registration = await getJSON(ENDPOINTBYMEMBER(campaign, member));
		cacheRegistration(registration);
	}
	return registration;
} 
