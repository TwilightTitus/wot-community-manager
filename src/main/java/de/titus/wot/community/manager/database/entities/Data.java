package de.titus.wot.community.manager.database.entities;

import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import de.titus.wot.community.manager.database.utils.JsonNodeConverter;
import lombok.EqualsAndHashCode;
import lombok.ToString;

/**
 * The Class Data.
 */
@Entity
@lombok.Data
@ToString
@EqualsAndHashCode
@JsonIgnoreProperties(ignoreUnknown = true)
public class Data {
	
	/** The id. */
	@Id
	@GeneratedValue
	private Long id;

	/** The type. */
	private String type;

	/** The reference. */
	private Long reference;

	/** The text. */
	@Lob
	@Convert(converter = JsonNodeConverter.class)
	private String text;
}
