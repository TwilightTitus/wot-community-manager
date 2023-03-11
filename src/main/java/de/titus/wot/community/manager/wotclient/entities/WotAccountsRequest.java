package de.titus.wot.community.manager.wotclient.entities;

import java.util.Collection;

import javax.ws.rs.QueryParam;

/**
 * The Class WotAccountsRequest.
 */
public class WotAccountsRequest extends BasicWotRequest{
	
	/** The fields. */
	@QueryParam("fields")
	private final String fields = "nickname,account_id,clan_id,global_rating,private";
	
	/** The access token. */
	@QueryParam("access_token")
	private final String accessToken;
	
	/** The account ids. */
	@QueryParam("account_id")
	private final String accountIds;
	
	/**
	 * Instantiates a new wot accounts request.
	 *
	 * @param theAccountIds the the account ids
	 * @param anAccessToken the an access token
	 */
	public WotAccountsRequest(Collection<String> theAccountIds, String anAccessToken) {
		this.accountIds = String.join(", ", theAccountIds);
		accessToken = anAccessToken;
	}
}
