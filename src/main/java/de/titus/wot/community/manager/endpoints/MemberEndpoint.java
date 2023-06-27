package de.titus.wot.community.manager.endpoints;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import de.titus.wot.community.manager.database.MemberRepository;
import de.titus.wot.community.manager.database.entities.Member;
import de.titus.wot.community.manager.endpoints.entities.ListResponse;
import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

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
	public ListResponse<Member> getMembers() {
		this.hasMemberAccess();
		return new ListResponse<>(this.memberRepository.findAllAtCommunity());
	}

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
