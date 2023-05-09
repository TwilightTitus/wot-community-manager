package de.titus.wot.community.manager.endpoints;

import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

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
