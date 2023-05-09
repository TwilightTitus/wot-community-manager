package de.titus.wot.community.manager.database.entities;

import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

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
	@GeneratedValue(strategy = GenerationType.IDENTITY)
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
