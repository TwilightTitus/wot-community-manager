package de.titus.wot.community.manager.wotclient;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.ws.rs.BeanParam;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

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
