package de.titus.wot.community.manager.database.entities;

import java.time.LocalDate;

import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.JsonNode;

import de.titus.wot.community.manager.database.utils.JsonNodeConverter;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

/**
 * The Class Campaign.
 */
@Entity
@Data
@ToString
@EqualsAndHashCode
@JsonIgnoreProperties(ignoreUnknown = true)
public class Campaign{
	
	/** The id. */
	@Id
	@GeneratedValue
	private Long id;
	
	/** The name. */
	private String name;
	
	/** The start date. */
	private LocalDate startDate;
	
	/** The end date. */
	private LocalDate endDate;
	
	/** The payload. */
	@Lob
	@Convert(converter = JsonNodeConverter.class)
	private JsonNode payload;

}
