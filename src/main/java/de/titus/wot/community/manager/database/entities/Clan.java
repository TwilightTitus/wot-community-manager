/*
 *
 */
package de.titus.wot.community.manager.database.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.quarkus.runtime.annotations.RegisterForReflection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

/**
 * The Class Clan.
 */
@Entity
@Data
@ToString
@EqualsAndHashCode
@JsonIgnoreProperties(ignoreUnknown = true)
@RegisterForReflection
public class Clan {

	/** The id. */
	@Id
	private Long id;

	/** The name. */
	private String name;

	/** The tag. */
	private String tag;

}