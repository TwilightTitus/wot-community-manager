package de.titus.wot.community.manager.database.entities;

import java.io.Serializable;

import javax.persistence.Convert;
import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Lob;

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
public class CampaignRegistration {
	
	/**
	 * The Class CampaignMemberKey.
	 */
	@Embeddable
	@Data
	@ToString
	@EqualsAndHashCode
	public static class CampaignMemberKey implements Serializable {
		
		/** The Constant serialVersionUID. */
		private static final long serialVersionUID = 1L;

		/** The campaignid. */
		private Long campaignid;
		
		/** The memberid. */
		private Long memberid;
	}
	
	/** The id. */
	@EmbeddedId
	private CampaignMemberKey id;

	/** The fullyavailable. */
	private boolean fullyavailable;

	/** The availability. */
	@Lob
	@Convert(converter = JsonNodeConverter.class)
	private JsonNode availability;

}
