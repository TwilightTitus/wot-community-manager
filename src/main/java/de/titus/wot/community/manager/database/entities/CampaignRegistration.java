package de.titus.wot.community.manager.database.entities;

import java.io.Serializable;

import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Lob;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.JsonNode;

import de.titus.wot.community.manager.database.utils.JsonNodeConverter;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

/**
 * The Class CampaignRegistration.
 */
@Entity
@Data
@ToString
@EqualsAndHashCode
@JsonIgnoreProperties(ignoreUnknown = true)
@IdClass(de.titus.wot.community.manager.database.entities.CampaignRegistration.CombinedId.class)
public class CampaignRegistration {

	@Data
	@ToString
	@EqualsAndHashCode
	@JsonIgnoreProperties(ignoreUnknown = true)
	public static class CombinedId implements Serializable {
		/** The campaignid. */
		private Long campaignid;

		/** The memberid. */
		private Long memberid;
	}

	/** The campaignid. */
	@Id
	private Long campaignid;

	/** The memberid. */
	@Id
	private Long memberid;

	/** The fullyavailable. */
	private boolean fullyavailable;

	/** The availability. */
	@Lob
	@Convert(converter = JsonNodeConverter.class)
	private JsonNode availability;

}
