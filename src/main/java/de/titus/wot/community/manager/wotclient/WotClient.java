package de.titus.wot.community.manager.wotclient;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

import org.eclipse.microprofile.rest.client.inject.RestClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import de.titus.wot.community.manager.wotclient.entities.WotAccount;
import de.titus.wot.community.manager.wotclient.entities.WotAccountsRequest;
import de.titus.wot.community.manager.wotclient.entities.WotAccountsResponse;
import de.titus.wot.community.manager.wotclient.entities.WotClan;
import de.titus.wot.community.manager.wotclient.entities.WotClansRequest;
import de.titus.wot.community.manager.wotclient.entities.WotClansResponse;
import de.titus.wot.community.manager.wotclient.entities.WotResponse;

/**
 * The Class WotClient.
 */
@ApplicationScoped
public class WotClient {

	/** The Constant LOGGER. */
	private static final Logger LOGGER = LoggerFactory.getLogger(WotClient.class);

	/** The Constant WOT_STATUS__ERROR. */
	private static final String WOT_STATUS__ERROR = "error";

	/** The wot rest client. */
	@Inject
	@RestClient
	IWotRestClient wotRestClient;

	/**
	 * Wot response error.
	 *
	 * @param aResponse the a response
	 * @return true, if successful
	 */
	private boolean wotResponseError(final WotResponse aResponse) {
		if (WotClient.WOT_STATUS__ERROR.equalsIgnoreCase(aResponse.getStatus()))
			return true;

		return false;
	}

	/**
	 * Gets the clans.
	 *
	 * @param theClanIds the the clan ids
	 * @return the clans
	 */
	public List<WotClan> getClans(final Collection<String> theClanIds) {
		final WotClansResponse response = this.wotRestClient.getClans(new WotClansRequest(theClanIds));
		WotClient.LOGGER.debug(String.format("getClans response: %s", response));
		if (this.wotResponseError(response))
			return new ArrayList<>();

		return new ArrayList<>(response.getData().values());
	}

	/**
	 * Gets the accounts.
	 *
	 * @param theAccounts the the accounts
	 * @return the accounts
	 */
	public List<WotAccount> getAccounts(final Collection<String> theAccounts) {
		final WotAccountsResponse response = this.wotRestClient.getAccounts(new WotAccountsRequest(theAccounts, null));
		WotClient.LOGGER.debug(String.format("getAccounts response: %s", response));
		if (this.wotResponseError(response))
			return new ArrayList<>();

		return new ArrayList<>(response.getData().values());
	}

	/**
	 * Gets the account with private data.
	 *
	 * @param anAccountId  the an account id
	 * @param anAccesToken the an acces token
	 * @return the account with private data
	 */
	public WotAccount getAccountWithPrivateData(final String anAccountId, final String anAccesToken) {
		final WotAccountsResponse response = this.wotRestClient
				.getAccounts(new WotAccountsRequest(Arrays.asList(anAccountId), anAccesToken));
		if (this.wotResponseError(response))
			return null;

		WotAccount account = response.getData().get(anAccountId);
		return account;
	}

}
