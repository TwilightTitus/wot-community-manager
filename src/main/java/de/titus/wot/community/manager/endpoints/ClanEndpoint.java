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

import de.titus.wot.community.manager.database.ClanRepository;
import de.titus.wot.community.manager.database.MemberRepository;
import de.titus.wot.community.manager.database.entities.Clan;
import de.titus.wot.community.manager.database.entities.Member;
import de.titus.wot.community.manager.endpoints.entities.ListResponse;

/**
 * The Class ClanEndpoint.
 */
@Path("/api/clans")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@RequestScoped
@Transactional
public class ClanEndpoint extends BaseEndpoint {

	/** The Constant LOGGER. */
	private static final Logger LOGGER = LoggerFactory.getLogger(ClanEndpoint.class);

	/** The clan repository. */
	@Inject
	ClanRepository clanRepository;

	/** The member repository. */
	@Inject
	MemberRepository memberRepository;

	/**
	 * Gets the clans.
	 *
	 * @return the clans
	 */
	@GET
	public ListResponse<Clan> getClans() {
		this.hasMemberAccess();
		return new ListResponse<>(this.clanRepository.allClans());
	}

	@GET
	@Path("/{clanid}/members")
	public ListResponse<Member> getClanMembers(@PathParam("clanid") final Long aClanid) {
		this.hasMemberAccess();
		return new ListResponse<>(this.memberRepository.allMembersByClan(aClanid));
	}

}
