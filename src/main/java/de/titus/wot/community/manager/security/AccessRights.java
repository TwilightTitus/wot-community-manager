package de.titus.wot.community.manager.security;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

/**
 * Instantiates a new access rights.
 */
@Data
@EqualsAndHashCode
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class AccessRights {

	/** The access. */
	private boolean access;

	/** The management. */
	private boolean management;

}
