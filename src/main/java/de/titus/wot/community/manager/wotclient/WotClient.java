package de.titus.wot.community.manager.wotclient;

import javax.ws.rs.BeanParam;
import javax.ws.rs.GET;
import javax.ws.rs.Path;

import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;

import de.titus.wot.community.manager.wotclient.entities.WotClanRequest;
import de.titus.wot.community.manager.wotclient.entities.WotClanResponse;

@Path("/wot")
@RegisterRestClient(configKey = "wot-api")
public interface WotClient {
	
	@Path("/clans/info/")
	@GET
	public WotClanResponse getClan(@BeanParam WotClanRequest aRequest );
	
	
}
