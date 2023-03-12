import {getJSON, postJSON, deleteJSON} from "./ServiceUtils.js";

const ENDPOINT = `/api/teams`;

const CACHE = new Map();
const CACHE_CAMPAIGNTEAMS = new Map();

const getCampignCache = (campaignId = null, create=false) => {	
	const cacheKey = campaignId ? campaignId : "";	
	if(CACHE_CAMPAIGNTEAMS.has(cacheKey))
		return CACHE_CAMPAIGNTEAMS.get(cacheKey);
	
	if(!create)
		return null;
	
	const campaignCache = new Map();
	CACHE_CAMPAIGNTEAMS.set(cacheKey, campaignCache);
	
	return campaignCache;
}

export const getTeams = async (campaignId = null) => {		
	let campaignCache = getCampignCache(campaignId);
	if(campaignCache)
		return Array.from(campaignCache.values());
		
	campaignCache = getCampignCache(campaignId, true);    
    const teams = (await (async () => {
		if(campaignId)
			return getJSON(`${ENDPOINT}/campaign/${campaignId}`);
		return getJSON(ENDPOINT);
	})()).data;    
    
    for(let team of teams){
		campaignCache.set(team.id, team);
        CACHE.set(team.id, team);
    }

    return teams;
};

export const getTeam = async (id) => {
    if(CACHE.has(id))
        return CACHE.get(id);

    const team = await getJSON(`${ENDPOINT}/${id}`);
    CACHE.set(team.id, team);    
    const campaignCache = getCampignCache(team.campaignId, true);
	campaignCache.set(team.id, team);
	
    return team;
};

export const storeTeam = async (team) => {
    team = await postJSON(`${ENDPOINT}`, team );
    CACHE.set(team.id, team);
    const campaignCache = getCampignCache(team.campaignid, true);
	campaignCache.set(team.id, team);

    return team;
};

export const deleteTeam = async (id) => {
    await deleteJSON(`${ENDPOINT}/${id}`);    
    const team = CACHE.get(id);
    const campaignCache = getCampignCache(team.campaignId, false);
    if(campaignCache)
		campaignCache.delete(id);
		
	CACHE.delete(id);
};