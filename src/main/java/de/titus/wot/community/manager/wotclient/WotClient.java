package de.titus.wot.community.manager.wotclient;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import de.titus.wot.community.manager.Configuration;
import de.titus.wot.community.manager.wotclient.entities.WotAccount;
import de.titus.wot.community.manager.wotclient.entities.WotAccountsRequest;
import de.titus.wot.community.manager.wotclient.entities.WotAccountsResponse;
import de.titus.wot.community.manager.wotclient.entities.WotClan;
import de.titus.wot.community.manager.wotclient.entities.WotClansRequest;
import de.titus.wot.community.manager.wotclient.entities.WotClansResponse;
import de.titus.wot.community.manager.wotclient.entities.WotResponse;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

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
	private final IWotRestClient wotRestClient;

	/** The configuration. */
	private final Configuration configuration;

	/**
	 * Instantiates a new wot client.
	 *
	 * @param aWotRestClient the a wot rest client
	 * @param aConfiguration the a configuration
	 */
	@Inject
	public WotClient(final IWotRestClient aWotRestClient, final Configuration aConfiguration) {
		this.wotRestClient = aWotRestClient;
		this.configuration = aConfiguration;
	}

	/**
	 * Wot response error.
	 *
	 * @param aResponse the a response
	 * @return true, if successful
	 */
	private boolean wotResponseError(final WotResponse aResponse) {
		if (WotClient.WOT_STATUS__ERROR.equalsIgnoreCase(aResponse.getStatus())) {
			return true;
		}

		return false;
	}

	/**
	 * Gets the clans.
	 *
	 * @param theClanIds the the clan ids
	 * @return the clans
	 */
	public List<WotClan> getClans(final Collection<String> theClanIds) {
		final WotClansResponse response = this.wotRestClient
				.getClans(WotClansRequest.builder()
						.applicationId(this.configuration.applicationid())
						.clanIds(String.join(",", theClanIds))
						.build());
		WotClient.LOGGER.debug(String.format("getClans response: %s", response));
		if (this.wotResponseError(response)) {
			return new ArrayList<>();
		}

		return new ArrayList<>(response.getData().values());
	}

	/**
	 * Gets the accounts.
	 *
	 * @param theAccounts the the accounts
	 * @return the accounts
	 */
	public List<WotAccount> getAccounts(final Collection<String> theAccounts) {
		final WotAccountsResponse response = this.wotRestClient
				.getAccounts(WotAccountsRequest
						.builder()
						.applicationId(this.configuration.applicationid())
						.accountIds(String.join(",", theAccounts))
						.build());
		WotClient.LOGGER.debug(String.format("getAccounts response: %s", response));
		if (this.wotResponseError(response)) {
			return new ArrayList<>();
		}

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
				.getAccounts(WotAccountsRequest
						.builder()
						.applicationId(this.configuration.applicationid())
						.accessToken(anAccesToken)
						.accountIds(anAccountId)
						.build());
		if (this.wotResponseError(response)) {
			return null;
		}

		WotAccount account = response.getData().get(anAccountId);
		return account;
	}

}
