package de.titus.wot.community.manager.endpoints;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import de.titus.wot.community.manager.database.TeamRepository;
import de.titus.wot.community.manager.database.entities.Team;
import de.titus.wot.community.manager.endpoints.entities.ListResponse;

/**
 * The Class TeamEndpoint.
 */
@Path("/api/teams")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@RequestScoped
@Transactional
public class TeamEndpoint extends BaseEndpoint {
	/** The Constant LOGGER. */
	private static final Logger LOGGER = LoggerFactory.getLogger(TeamEndpoint.class);

	/** The team repository. */
	@Inject
	TeamRepository teamRepository;

	/**
	 * Gets the teams.
	 *
	 * @return the teams
	 */
	@GET
	public ListResponse<Team> getTeams() {
		this.hasMemberAccess();
		return new ListResponse<>(this.teamRepository.findAll());
	}

	/**
	 * Gets the teams.
	 *
	 * @param aCampaignId the a campaign id
	 * @return the teams
	 */
	@GET
	@Path("/campaign/{campaignid}")
	public ListResponse<Team> getTeams(@PathParam("campaignid") final Long aCampaignId) {
		this.hasMemberAccess();
		return new ListResponse<>(this.teamRepository.findByCampaignId(aCampaignId));
	}

	/**
	 * Store team.
	 *
	 * @param aTeam the a team
	 * @return the team
	 */
	@POST
	public Team storeTeam(final Team aTeam) {
		this.hasManagementAccess();
		return this.teamRepository.persist(aTeam);
	}

	/**
	 * Gets the team.
	 *
	 * @param aTeamId the a team id
	 * @return the team
	 */
	@GET
	@Path("/{teamid}")
	public Team getTeam(@PathParam("teamid") final Long aTeamId) {
		this.hasMemberAccess();
		return this.teamRepository.findById(aTeamId);
	}

	/**
	 * Delete team.
	 *
	 * @param aTeamId the a team id
	 * @return the response
	 */
	@DELETE
	@Path("/{teamid}")
	public Response deleteTeam(@PathParam("teamid") final Long aTeamId) {
		this.hasManagementAccess();
		this.teamRepository.delete(aTeamId);

		return Response.noContent().build();
	}

}
