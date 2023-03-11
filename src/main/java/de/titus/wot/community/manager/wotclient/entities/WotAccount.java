package de.titus.wot.community.manager.wotclient.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

/**
 * Instantiates a new wot account.
 */
@Data
@EqualsAndHashCode
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class WotAccount {

	/**
	 * The Class Private.
	 */
	@Data
	@EqualsAndHashCode
	@ToString
	@JsonIgnoreProperties(ignoreUnknown = true)
	public static class WotPrivate {
		/** The credits. */
		private String credits;
	}

	/** The id. */
	@JsonProperty("account_id")
	private long id;

	/** The name. */
	@JsonProperty("nickname")
	private String name;

	/** The clan id. */
	@JsonProperty("clan_id")
	private long clanId;

	/** The wtr. */
	@JsonProperty("global_rating")
	private String wtr;

	@JsonProperty("private")
	private WotPrivate wotPrivate;
}
