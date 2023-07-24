package de.titus.wot.community.manager.security;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.quarkus.runtime.annotations.RegisterForReflection;
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
@RegisterForReflection
public class AccessRights {

	/** The access. */
	private boolean access;

	/** The management. */
	private boolean management;

}
