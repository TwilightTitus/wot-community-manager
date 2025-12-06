package de.titus.wot.community.manager.wotclient.entities;

import jakarta.ws.rs.QueryParam;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

/**
 * The Class WotClanRequest.
 */
@Getter
@ToString
@EqualsAndHashCode
@Builder(toBuilder = true)
public class WotClansRequest {

	/** The application id. */
	@QueryParam("application_id")
	private final String applicationId;

	/** The fields. */
	@QueryParam("fields")
	private final String fields = "clan_id,name,tag,members.account_id,members.role";

	/** The clan ids. */
	@QueryParam("members_key")
	private final String memberKey = "id";

	/** The clan ids. */
	@QueryParam("clan_id")
	private final String clanIds;

}
