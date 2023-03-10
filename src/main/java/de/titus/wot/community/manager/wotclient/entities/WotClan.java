package de.titus.wot.community.manager.wotclient.entities;

import java.util.Map;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

/**
 * Instantiates a new wot clan.
 */
@Data
@EqualsAndHashCode
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class WotClan {

	/**
	 * Instantiates a new wot clan member.
	 */
	@Data
	@EqualsAndHashCode
	@ToString
	@JsonIgnoreProperties(ignoreUnknown = true)
	public static class WotClanMember {

		/** The account id. */
		@JsonProperty("account_id")
		private long accountId;

		/** The role. */
		private String role;
	}

	/** The id. */
	@JsonProperty("clan_id")
	private long id;

	/** The name. */
	private String name;

	/** The tag. */
	private String tag;

	/** The members. */
	private Map<String, WotClanMember> members;

}
