package de.titus.wot.community.manager.scheduled;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.eclipse.microprofile.rest.client.inject.RestClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import de.titus.wot.community.manager.Configuration;
import de.titus.wot.community.manager.database.ClanRepository;
import de.titus.wot.community.manager.database.MemberRepository;
import de.titus.wot.community.manager.wotclient.WotClient;
import de.titus.wot.community.manager.wotclient.entities.WotClanRequest;
import de.titus.wot.community.manager.wotclient.entities.WotClanResponse;
import io.quarkus.runtime.Startup;
import io.quarkus.scheduler.Scheduled;

@ApplicationScoped
public class SyncDataTask {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(SyncDataTask.class);
	
	@Inject
	Configuration configuration;
	
	@Inject
	ClanRepository clanRepository;
	
	@Inject
	MemberRepository memberRepository;
	
	@Inject
	@RestClient
	WotClient wotClient;
	
	
	@Startup
	public void onStartip() {		
		doSync();
		
	}
	
	
	@Scheduled(cron = "0 0 0 * * ?")
	public void doSync() {
		LOGGER.debug("start data sync");
		
		
		WotClanResponse response = wotClient.getClan(new WotClanRequest(configuration.clanids()));
		
		LOGGER.debug(response.toString());
		
	}

}
