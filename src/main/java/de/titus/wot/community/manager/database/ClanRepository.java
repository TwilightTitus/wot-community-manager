package de.titus.wot.community.manager.database;

import java.util.List;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;

import de.titus.wot.community.manager.database.entities.Clan;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

/**
 * The Class ClanRepository.
 */
@ApplicationScoped
public class ClanRepository {

	/**
	 * The Class Repository.
	 */
	@ApplicationScoped
	static class Repository implements PanacheRepository<Clan> {

	}

	/** The entity manager. */
	@Inject
	EntityManager entityManager;

	/** The repository. */
	@Inject
	Repository repository;

	/**
	 * Find by id.
	 *
	 * @param aId the a id
	 * @return the clan
	 */
	public Clan findById(final Long aId) {
		return this.repository.findById(aId);
	}

	/**
	 * All clans.
	 *
	 * @return the list
	 */
	public List<Clan> allClans() {
		return this.repository.listAll();
	}

	/**
	 * Persist.
	 *
	 * @param aClan the a clan
	 * @return the clan
	 */
	public Clan persist(final Clan aClan) {
		Clan clan = this.entityManager.merge(aClan);
		this.repository.persist(clan);
		return clan;
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
