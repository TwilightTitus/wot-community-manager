import {getJSON, postJSON, deleteJSON} from "./ServiceUtils.js";
import "../entities/Team.js";

const ENDPOINT = `/api/teams`;

const CACHE = new Map();
const CACHE_CAMPAIGNTEAMS = new Map();


/**
 * @param {?(string|number)} campaignid - campagn id
 * @param {boolean} [create] - create team cache for campaign
 * 
 * @returns {Map<number, Team>}
 */
const getCampignCache = (campaignid = null, create=false) => {	
	const cacheKey = `${campaignid ? campaignid : -1}`;
	if(CACHE_CAMPAIGNTEAMS.has(cacheKey))
		return CACHE_CAMPAIGNTEAMS.get(cacheKey);
	
	if(!create)
		return null;
	
	const campaignCache = new Map();
	CACHE_CAMPAIGNTEAMS.set(cacheKey, campaignCache);
	
	return campaignCache;
}


/**
 * get teams
 * 
 * @param {?(string|number)} campaignid - campagn id
 * 
 * @returns {Promise<Team[]>}
 */
export const getTeams = async (campaignid = null) => {		
	let campaignCache = getCampignCache(campaignid);
	if(campaignCache)
		return Array.from(campaignCache.values());
		
	campaignCache = getCampignCache(campaignid, true);    
    const teams = (await (async () => {
		if(campaignid)
			return getJSON(`${ENDPOINT}/campaign/${campaignid}`);
		return getJSON(ENDPOINT);
	})()).data;    
    
    for(let team of teams){
		campaignCache.set(team.id, team);
        CACHE.set(team.id, team);
    }

    return teams;
};

/**
 * get team
 * 
 * @param {number} id - team id
 * 
 * @returns {Promise<Team>}
 */
export const getTeam = async (id) => {
    if(CACHE.has(id))
        return CACHE.get(id);

    const team = await getJSON(`${ENDPOINT}/${id}`);
    CACHE.set(team.id, team);    
    const campaignCache = getCampignCache(team.campaignid, true);
	campaignCache.set(team.id, team);
	
    return team;
};

/**
 * store team
 * 
 * @param {Team} team - team 
 * 
 * @returns {Promise<Team>}
 */
export const storeTeam = async (team) => {
    team = await postJSON(`${ENDPOINT}`, team );
    CACHE.set(team.id, team);
    const campaignCache = getCampignCache(team.campaignid, true);
	campaignCache.set(team.id, team);

    return team;
};

/**
 * delete team
 * 
 * @param {number} id - team id
 * 
 * @returns {Promise<>}
 */
export const deleteTeam = async (id) => {
    await deleteJSON(`${ENDPOINT}/${id}`);    
    const team = CACHE.get(id);
    const campaignCache = getCampignCache(team.campaignid, false);
    if(campaignCache)
		campaignCache.delete(id);
		
	CACHE.delete(id);
};