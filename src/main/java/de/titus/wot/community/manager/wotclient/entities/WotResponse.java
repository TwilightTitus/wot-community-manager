package de.titus.wot.community.manager.wotclient.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

/**
 * Instantiates a new wot response.
 */
@Data
@ToString
@EqualsAndHashCode
@JsonIgnoreProperties(ignoreUnknown = true)
public class WotResponse {	

	 /** The status. */
	private String status;	
}
