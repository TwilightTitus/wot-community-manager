package de.titus.wot.community.manager;

import java.util.Set;

import io.quarkus.runtime.annotations.ConfigPhase;
import io.quarkus.runtime.annotations.ConfigRoot;
import io.quarkus.runtime.annotations.StaticInitSafe;
import io.smallrye.config.ConfigMapping;

/**
 * The Interface Configuration.
 */
@StaticInitSafe
@ConfigMapping(prefix = "wot.community.manager" )
@ConfigRoot(phase = ConfigPhase.RUN_TIME)
public interface Configuration {
	
	/**
	 * External url.
	 *
	 * @return the string
	 */
	public String externalUrl();
	
	/**
	 * Session timeout.
	 *
	 * @return the long
	 */
	public long sessionTimeout();
	
	/**
	 * Applicationid.
	 *
	 * @return the string
	 */
	public String applicationid();
	
	/**
	 * Clanids.
	 *
	 * @return the sets the
	 */
	public Set<String> clanids();
	
	/**
	 * Allowed management roles.
	 *
	 * @return the sets the
	 */
	public Set<String> allowedManagementRoles();
	
	/**
	 * Wot login url.
	 *
	 * @return the string
	 */
	public String wotLoginUrl();

}
