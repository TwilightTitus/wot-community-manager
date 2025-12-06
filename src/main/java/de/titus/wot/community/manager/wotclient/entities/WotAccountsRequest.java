package de.titus.wot.community.manager.wotclient.entities;

import jakarta.ws.rs.QueryParam;
import lombok.Builder;
import lombok.Builder.Default;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

/**
 * The Class WotAccountsRequest.
 */
@Getter
@ToString
@EqualsAndHashCode
@Builder(toBuilder = true)
public class WotAccountsRequest {

	/** The application id. */
	@QueryParam("application_id")
	private final String applicationId;

	/** The fields. */
	@QueryParam("fields")
	@Default
	private final String fields = "nickname,account_id,clan_id,global_rating,private";

	/** The access token. */
	@QueryParam("access_token")
	private final String accessToken;

	/** The account ids. */
	@QueryParam("account_id")
	private final String accountIds;
}
