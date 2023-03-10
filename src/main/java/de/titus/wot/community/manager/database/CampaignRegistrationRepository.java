package de.titus.wot.community.manager.database;

import javax.enterprise.context.ApplicationScoped;

import de.titus.wot.community.manager.database.entities.CampaignRegistration;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;

/**
 * The Class CampaignRegistrationRepository.
 */
@ApplicationScoped
public class CampaignRegistrationRepository implements PanacheRepositoryBase<CampaignRegistration, CampaignRegistration.CampaignMemberKey>{

}
