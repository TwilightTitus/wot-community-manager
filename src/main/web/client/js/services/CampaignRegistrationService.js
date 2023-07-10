import { getJSON, postJSON, deleteJSON } from "./ServiceUtils.js";
import { member } from "./LoginService.js";
import { getMember } from "./MemberService.js";
import Cache from "./Cache.js";

const ENDPOINT = (campaignid) => `/api/campaigns/${campaignid}/registrations`;
const ENDPOINT_MEMBER_REGISTRATIOIN = (campaignid, memberid) => `/api/campaigns/${campaignid}/registrations/${memberid}`;


const CACHE = new Cache(10 * 60 * 1000);


const loadRegistrions = async (campaignid) => {
	const registrations = new Map();
	const response = (await getJSON(ENDPOINT(campaignid))).data || [];
	await Promise.all(response.map(async (registration) => {
		return appendRegistraion(registrations, registration);
	}));

	return registrations;
};

const appendRegistraion = async (registrations, registration) => {
	const { memberid } = registration;
	registration.member = await getMember(memberid);
	registrations.set(`${memberid}`, registration);
}

const getCachedRegistrations = (campaignid) => {
	const key = `${campaignid}`;
	let registrations = CACHE.get(key) || null;
	if (!registrations){
		registrations = loadRegistrions(campaignid);
		CACHE.set(key, registrations);
	}

	return registrations;
}

const cacheRegistration = async (registration) => {
	if (!registration) return;
	const { campaignid } = registration;
	const registrations = await getCachedRegistrations(campaignid, true);
	appendRegistraion(registrations, registration);
}

export const getRegistrations = async (campaign) => {
	const registrations = await getCachedRegistrations(campaign, true);	
	const result = Array.from(registrations.values());

	return result.sort((a, b) => {
		if (a.member.name.toLowerCase() < b.member.name.toLowerCase())
			return -1;
		if (a.member.name.toLowerCase() > b.member.name.toLowerCase())
			return 1;
		return 0;
	});
}

export const storeRegistration = async (campaign, registration) => {
	registration = await postJSON(ENDPOINT(campaign), registration);
	await cacheRegistration(registration);
	return registration;
}

export const getMyRegistration = async (campaign) => {
	return getRegistrationByMember(campaign, member().id);
}

export const getRegistrationByMember = async (campaign, member) => {
	let registrations = await getCachedRegistrations(campaign);
	return registrations.get(`${member}`);
} 
