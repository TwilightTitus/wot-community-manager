package de.titus.wot.community.manager.wotclient;

import javax.enterprise.context.ApplicationScoped;
import javax.ws.rs.BeanParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;

import de.titus.wot.community.manager.wotclient.entities.WotAccountsRequest;
import de.titus.wot.community.manager.wotclient.entities.WotAccountsResponse;
import de.titus.wot.community.manager.wotclient.entities.WotClansRequest;
import de.titus.wot.community.manager.wotclient.entities.WotClansResponse;

/**
 * The Interface IWotRestClient.
 */
@Path("/wot")
@RegisterRestClient(configKey = "wot-api")
@ApplicationScoped
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public interface IWotRestClient {

	/**
	 * Gets the clans.
	 *
	 * @param aRequest the a request
	 * @return the clans
	 */
	@GET
	@Path("/clans/info/")
	public WotClansResponse getClans(@BeanParam WotClansRequest aRequest);

	/**
	 * Gets the accounts.
	 *
	 * @param aRequest the a request
	 * @return the accounts
	 */
	@GET
	@Path("/account/info/")
	public WotAccountsResponse getAccounts(@BeanParam WotAccountsRequest aRequest);

}
