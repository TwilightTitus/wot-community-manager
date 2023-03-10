package de.titus.wot.community.manager.wotclient.entities;

import javax.ws.rs.QueryParam;

import org.eclipse.microprofile.config.ConfigProvider;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

/**
 * The Class BasicWotRequest.
 */
@Data
@ToString
@EqualsAndHashCode
public abstract class BasicWotRequest {	

	/** The application id. */
	@QueryParam("application_id")	
	private String applicationId = ConfigProvider.getConfig().getConfigValue("wot.community.manager.applicationid").getValue();

}
