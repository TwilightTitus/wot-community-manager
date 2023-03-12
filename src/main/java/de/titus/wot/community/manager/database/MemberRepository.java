package de.titus.wot.community.manager.database;

import java.util.Collection;
import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;

import de.titus.wot.community.manager.database.entities.Member;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

/**
 * The Class MemberRepository.
 */
@ApplicationScoped
public class MemberRepository {
	/**
	 * The Class Repository.
	 */
	@ApplicationScoped
	static class Repository implements PanacheRepository<Member> {

	}

	/** The entity manager. */
	@Inject
	EntityManager entityManager;

	/** The repository. */
	@Inject
	Repository repository;

	/**
	 * Persist.
	 *
	 * @param aMember the a member
	 * @return the member
	 */
	public Member persist(final Member aMember) {
		Member member = this.entityManager.merge(aMember);
		this.repository.persist(member);

		return member;
	}

	/**
	 * Persist.
	 *
	 * @param aMembers the a members
	 * @return the list
	 */
	public List<Member> persist(final Collection<Member> aMembers) {
		List<Member> members = aMembers.stream().map((member) -> {
			return this.entityManager.merge(member);
		}).toList();
		this.repository.persist(members);
		return members;
	}

	/**
	 * All members.
	 *
	 * @return the list
	 */
	public List<Member> findAll() {
		return this.repository.listAll();
	}

	/**
	 * All members by clan.
	 *
	 * @param aClanId the a clan id
	 * @return the list
	 */
	public List<Member> allMembersByClan(final Long aClanId) {
		return this.repository.find("clanId = ?1", aClanId).page(0, Integer.MAX_VALUE).list();
	}

	/**
	 * Find by id.
	 *
	 * @param aId the a id
	 * @return the member
	 */
	public Member findById(final long aId) {
		return this.repository.findById(aId);
	}
}
