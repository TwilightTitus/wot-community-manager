package de.titus.wot.community.manager.database;

import javax.enterprise.context.ApplicationScoped;

import io.quarkus.hibernate.orm.panache.PanacheRepository;

@ApplicationScoped
public class CampaignRepository implements PanacheRepository<CampaignRepository>{

}
