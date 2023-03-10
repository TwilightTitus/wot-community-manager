package de.titus.wot.community.manager.wotclient.entities;

import java.util.List;

import javax.ws.rs.QueryParam;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

/**
 * The Class WotClanRequest.
 */
@Data
@ToString
@EqualsAndHashCode
public class WotClanRequest extends BasicWotRequest{

	
	
	/** The fields. */
	@QueryParam("fields")
	private final String fields = "clan_id,name,tag,members.account_id,members.role";
	
	/** The memberskey. */
	@QueryParam("members_key")
	private final String memberskey = "id";
	
	/** The clan ids. */
	@QueryParam("clan_id")
	private final String clanIds;
	
	/**
	 * Instantiates a new wot clan request.
	 *
	 * @param theClanIds the the clan ids
	 */
	public WotClanRequest(String ... theClanIds) {
		List<String> ids = List.of(theClanIds);
		this.clanIds = String.join(", ", ids);
	}
	
}
