package de.titus.wot.community.manager;

import java.util.Set;

import io.quarkus.runtime.annotations.ConfigPhase;
import io.quarkus.runtime.annotations.ConfigRoot;
import io.smallrye.config.ConfigMapping;

/**
 * The Interface Configuration.
 */
@ConfigMapping(prefix = "application" )
@ConfigRoot(phase = ConfigPhase.RUN_TIME)
public interface Configuration {
	String externalUrl();
	Long sessionTimeout();
	String applicationid();
	Set<String> clanids();
	Set<String> admins();
	Set<String> allowedManagementRoles();
	
	WOT wot();
	
	
	public interface WOT{
		String apiUrl();
		String loginUrl();
	}

}
