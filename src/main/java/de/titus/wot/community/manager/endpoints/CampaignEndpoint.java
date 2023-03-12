package de.titus.wot.community.manager.endpoints;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.NotFoundException;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import de.titus.wot.community.manager.database.CampaignRegistrationRepository;
import de.titus.wot.community.manager.database.CampaignRepository;
import de.titus.wot.community.manager.database.entities.Campaign;
import de.titus.wot.community.manager.database.entities.CampaignRegistration;
import de.titus.wot.community.manager.database.entities.Member;
import de.titus.wot.community.manager.endpoints.entities.ListResponse;

/**
 * The Class CampaignEndpoint.
 */
@Path("/api/campaigns")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@RequestScoped
@Transactional
public class CampaignEndpoint extends BaseEndpoint {

	/** The Constant LOGGER. */
	private static final Logger LOGGER = LoggerFactory.getLogger(CampaignEndpoint.class);

	/** The campaign repository. */
	@Inject
	CampaignRepository campaignRepository;

	/** The campaign registration repository. */
	@Inject
	CampaignRegistrationRepository campaignRegistrationRepository;

	/**
	 * Gets the campaigns.
	 *
	 * @return the campaigns
	 */
	@GET
	public ListResponse<Campaign> getCampaigns() {
		this.hasMemberAccess();
		return new ListResponse<>(this.campaignRepository.allCampaigns());
	}

	/**
	 * Gets the campaigns.
	 *
	 * @param aCampaign the a campaign
	 * @return the campaigns
	 */
	@POST
	public Campaign getCampaigns(final Campaign aCampaign) {
		this.hasManagementAccess();
		return this.campaignRepository.persist(aCampaign);
	}

	/**
	 * Delete campaigns.
	 *
	 * @param aCampaignId the a campaign id
	 */
	@DELETE
	@Path("/{campaignid}")
	public Response deleteCampaigns(@PathParam("campaignid") final Long aCampaignId) {
		this.hasManagementAccess();
		this.campaignRepository.deleteById(aCampaignId);

		return Response.noContent().build();
	}

	/**
	 * Gets the campaign registrations.
	 *
	 * @param aCampaignId the a campaign id
	 * @return the campaign registrations
	 */
	@GET
	@Path("/{campaignid}/registrations")
	public ListResponse<CampaignRegistration> getCampaignRegistrations(@PathParam("campaignid") final Long aCampaignId) {
		this.hasManagementAccess();
		return new ListResponse<>(this.campaignRegistrationRepository.findByCampaign(aCampaignId));
	}

	/**
	 * Gets the campaign registrations.
	 *
	 * @param aCampaignId   the a campaign id
	 * @param aRegistration the a registration
	 * @return the campaign registrations
	 */
	@POST
	@Path("/{campaignid}/registrations")
	public CampaignRegistration getCampaignRegistrations(@PathParam("campaignid") final Long aCampaignId, final CampaignRegistration aRegistration) {
		this.hasMemberAccess();
		final Member member = this.getMember();
		aRegistration.setCampaignid(aCampaignId);
		aRegistration.setMemberid(member.getId());

		return this.campaignRegistrationRepository.persist(aRegistration);
	}

	/**
	 * Gets the campaign registration by member.
	 *
	 * @param aCampaignId the a campaign id
	 * @param aMemberId   the a member id
	 * @return the campaign registration by member
	 */
	@GET
	@Path("/{campaignid}/registrations/{memberid}")
	public CampaignRegistration getCampaignRegistrationByMember(@PathParam("campaignid") final Long aCampaignId, @PathParam("memberid") final Long aMemberId) {
		this.hasMemberAccess();
		final Member member = this.getMember();
		if (member.getId() != aMemberId)
			this.hasManagementAccess();

		CampaignRegistration registration = this.campaignRegistrationRepository.findByCampaignAndMember(aCampaignId, aMemberId);
		if (registration == null)
			throw new NotFoundException();

		return registration;
	}

}
