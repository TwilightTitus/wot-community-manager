package de.titus.wot.community.manager.wotclient.entities;

import java.util.Map;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

/**
 * The Class WotAccountsResponse.
 */
@Data
@ToString
@EqualsAndHashCode(callSuper = true)
@JsonIgnoreProperties(ignoreUnknown = true)
public class WotAccountsResponse extends WotResponse {

	/** The data. */
	private Map<String, WotAccount> data;
}
