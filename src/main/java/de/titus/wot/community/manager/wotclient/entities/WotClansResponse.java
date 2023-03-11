package de.titus.wot.community.manager.wotclient.entities;

import java.util.Map;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

/**
 * The Class WotClanResponse.
 */
@Data
@ToString
@EqualsAndHashCode(callSuper = true)
@JsonIgnoreProperties(ignoreUnknown = true)
public class WotClansResponse extends WotResponse{
	
	/** The data. */
	private Map<String, WotClan> data;

}
