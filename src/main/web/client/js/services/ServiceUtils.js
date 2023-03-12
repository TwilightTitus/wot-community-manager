import {login} from "./LoginService.js";

const toURL = (url) => {
    if(!(url instanceof URL))
        return new URL(url, location);
    return url;
};

const internalFetch = async (url, request) => {	
	const response = await fetch(toURL(url), request);
	if(response.ok && response.status >= 400)
		return await login();
		
	return response;
}

export const getJSON = async (url) => {
    const response = await internalFetch(url, {headers:{"content-type": "application/json"}});
    if(response.status < 204)
    	return response.json();
};

export const postJSON = async (url, data) => {
    const response = await internalFetch(url, {method: "post" ,headers:{"content-type": "application/json"}, body: JSON.stringify(data)});
    if(response.status < 204)
        return response.json();
};

export const deleteJSON = async (url) => {
    await internalFetch(url, {method: "delete", headers:{"content-type": "application/json"}});
};