import { getJSON } from "./ServiceUtils.js";
import { member } from "./LoginService.js";

const ENDPOINT = `/api/members`;

let FULLLOADED = false;
const CACHE = new Map();

export const currentMember = async () => {
	return member();
};

export const getMembers = async () => {
	let members = null
	if (!FULLLOADED) {
		members = (await getJSON(ENDPOINT)).data;
		for (const member of members)
			CACHE.set(member.id, member);

		FULLLOADED = true;
	}
	else
		members = Array.from(CACHE.values());

	return members.sort((a, b) => {
		if (a.name < b.name)
			return -1;
		if (a.name > b.name)
			return 1;
		return 0;
	});
};

export const getMember = async (id) => {
	if (CACHE.has(id))
		return CACHE.get(id);

	const member = await getJSON(`${ENDPOINT}/${id}`);
	if (member)
		CACHE.set(member.id, member);

	return member;
}