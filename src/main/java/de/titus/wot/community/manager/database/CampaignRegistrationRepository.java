package de.titus.wot.community.manager.database;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;

import de.titus.wot.community.manager.database.entities.CampaignRegistration;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;

/**
 * The Class CampaignRegistrationRepository.
 */
@ApplicationScoped
public class CampaignRegistrationRepository {

	/**
	 * The Class Repository.
	 */
	@ApplicationScoped
	static class Repository implements PanacheRepositoryBase<CampaignRegistration, CampaignRegistration.CombinedId> {

	}

	/** The entity manager. */
	@Inject
	EntityManager entityManager;

	/** The repository. */
	@Inject
	Repository repository;

	/**
	 * Find by campaign.
	 *
	 * @param aCampaignId the a campaign id
	 * @return the list
	 */
	public List<CampaignRegistration> findByCampaign(final Long aCampaignId) {
		return this.repository.find("campaignid = ?1", aCampaignId).page(0, Integer.MAX_VALUE).list();
	}

	/**
	 * Find by campaign and member.
	 *
	 * @param aCampaignId the a campaign id
	 * @param aMemberId   the a member id
	 * @return the campaign registration
	 */
	public CampaignRegistration findByCampaignAndMember(final Long aCampaignId, final Long aMemberId) {
		return this.repository
				.find("campaignid = ?1 AND memberid = ?2", aCampaignId, aMemberId)
				.page(0, 1)
				.singleResultOptional()
				.orElse(null);
	}

	/**
	 * Persist.
	 *
	 * @param aRegistration the a registration
	 * @return the campaign registration
	 */
	public CampaignRegistration persist(final CampaignRegistration aRegistration) {
		CampaignRegistration registration = this.entityManager.merge(aRegistration);
		this.repository.persist(registration);
		return registration;
	}

	/**
	 * Delete.
	 *
	 * @param aCampaignId the a campaign id
	 * @param aMemberId   the a member id
	 */
	public void delete(final Long aCampaignId, final Long aMemberId) {
		this.repository.delete("campaignid = ?1 AND memberid = ?2", aCampaignId, aMemberId);
	}
}
