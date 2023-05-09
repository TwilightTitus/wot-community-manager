/*
 *
 */
package de.titus.wot.community.manager.database.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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
public class Clan{
	
	/** The id. */
	@Id
	private Long id;

	/** The name. */
	private String name;
	
	/** The tag. */
	private String tag;
    
}