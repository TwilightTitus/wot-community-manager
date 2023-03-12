package de.titus.wot.community.manager.endpoints;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import de.titus.wot.community.manager.database.MemberRepository;
import de.titus.wot.community.manager.database.entities.Member;

/**
 * The Class MemberEndpoint.
 */
@Path("/api/members")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@RequestScoped
@Transactional
public class MemberEndpoint extends BaseEndpoint {
	/** The Constant LOGGER. */
	private static final Logger LOGGER = LoggerFactory.getLogger(MemberEndpoint.class);

	/** The member repository. */
	@Inject
	MemberRepository memberRepository;

	/**
	 * Gets the member.
	 *
	 * @param aMemberId the a member id
	 * @return the member
	 */
	@GET
	@Path("/{memberid}")
	public Member getMember(@PathParam("memberid") final Long aMemberId) {
		this.hasMemberAccess();
		return this.memberRepository.findById(aMemberId);
	}
}
