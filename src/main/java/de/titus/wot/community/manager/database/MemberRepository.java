package de.titus.wot.community.manager.database;

import javax.enterprise.context.ApplicationScoped;

import de.titus.wot.community.manager.database.entities.Member;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

/**
 * The Class MemberRepository.
 */
@ApplicationScoped
public class MemberRepository implements PanacheRepository<Member> {

}
