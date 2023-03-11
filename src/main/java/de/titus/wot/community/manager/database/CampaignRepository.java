package de.titus.wot.community.manager.database;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;

import de.titus.wot.community.manager.database.entities.Campaign;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

/**
 * The Class CampaignRepository.
 */
@ApplicationScoped
public class CampaignRepository {
	/**
	 * The Class Repository.
	 */
	@ApplicationScoped
	static class Repository implements PanacheRepository<Campaign> {

	}

	/** The entity manager. */
	@Inject
	EntityManager entityManager;

	/** The repository. */
	@Inject
	Repository repository;

	/**
	 * All campaigns.
	 *
	 * @return the list
	 */
	public List<Campaign> allCampaigns() {
		return this.repository.listAll();
	}

	/**
	 * Persist.
	 *
	 * @param aCampaign the a campaign
	 * @return the campaign
	 */
	public Campaign persist(final Campaign aCampaign) {
		Campaign campaign = this.entityManager.merge(aCampaign);
		this.repository.persist(campaign);

		return campaign;
	}

	/**
	 * Delete by id.
	 *
	 * @param aId the a id
	 */
	public void deleteById(final Long aId) {
		this.repository.deleteById(aId);
	}

}
