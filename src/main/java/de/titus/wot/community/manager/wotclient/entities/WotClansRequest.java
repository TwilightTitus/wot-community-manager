package de.titus.wot.community.manager.wotclient.entities;

import java.util.Collection;

import javax.ws.rs.QueryParam;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

/**
 * The Class WotClanRequest.
 */
@Data
@ToString
@EqualsAndHashCode(callSuper = true)
public class WotClansRequest extends BasicWotRequest{
	
	/** The fields. */
	@QueryParam("fields")
	private final String fields = "clan_id,name,tag,members.account_id,members.role";
	
	/** The clan ids. */
	@QueryParam("members_key")
	private final String memberKey = "id";
		
	/** The clan ids. */
	@QueryParam("clan_id")
	private final String clanIds;
	
	/**
	 * Instantiates a new wot clan request.
	 *
	 * @param theClanIds the the clan ids
	 */
	public WotClansRequest(Collection<String> theClanIds) {
		this.clanIds = String.join(", ", theClanIds);
	}
	
}
