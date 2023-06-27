package de.titus.wot.community.manager.database;

import java.util.Collection;
import java.util.List;

import de.titus.wot.community.manager.Configuration;
import de.titus.wot.community.manager.database.entities.Member;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import io.quarkus.panache.common.Sort;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;

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

	/** The configuration. */
	@Inject
	Configuration configuration;

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
		return this.repository.listAll(Sort.by("name"));
	}

	/**
	 * Find all at community.
	 *
	 * @return the list
	 */
	public List<Member> findAllAtCommunity() {
		return this.repository.list("clanId in ?1", Sort.by("name"), this.configuration.clanids().stream().map(Long::parseLong).toList());
	}

	/**
	 * All members by clan.
	 *
	 * @param aClanId the a clan id
	 * @return the list
	 */
	public List<Member> allMembersByClan(final Long aClanId) {
		return this.repository.list("clanId = ?1", Sort.by("name"), aClanId);
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
