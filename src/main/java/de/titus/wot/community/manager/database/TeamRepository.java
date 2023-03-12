package de.titus.wot.community.manager.database;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;

import de.titus.wot.community.manager.database.entities.Team;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

/**
 * The Class TeamRepository.
 */
@ApplicationScoped
public class TeamRepository {
	/**
	 * The Class Repository.
	 */
	@ApplicationScoped
	static class Repository implements PanacheRepository<Team> {

	}

	/** The entity manager. */
	@Inject
	EntityManager entityManager;

	/** The repository. */
	@Inject
	Repository repository;

	/**
	 * All teams.
	 *
	 * @return the list
	 */
	public List<Team> findAll() {
		return this.repository
				.find("campaignid IS NULL")
				.page(0, Integer.MAX_VALUE)
				.list();
	}

	/**
	 * All teams.
	 *
	 * @return the list
	 */
	public List<Team> findByCampaignId(final Long aCampaignId) {
		return this.repository
				.find("campaignid = ?1", aCampaignId)
				.page(0, Integer.MAX_VALUE)
				.list();
	}

	/**
	 * Persist.
	 *
	 * @param aTeam the a team
	 * @return the team
	 */
	public Team persist(final Team aTeam) {
		Team team = this.entityManager.merge(aTeam);
		this.repository.persist(team);

		return team;
	}

	/**
	 * Find by id.
	 *
	 * @param aId the a id
	 * @return the team
	 */
	public Team findById(final Long aId) {
		return this.repository.findById(aId);
	}

	/**
	 * Delete.
	 *
	 * @param aTeamId the a team id
	 */
	public void delete(final Long aTeamId) {
		this.repository.deleteById(aTeamId);
	}
}
