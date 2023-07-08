package de.titus.wot.community.manager.endpoints;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import de.titus.wot.community.manager.database.CampaignRegistrationRepository;
import de.titus.wot.community.manager.database.CampaignRepository;
import de.titus.wot.community.manager.database.entities.Campaign;
import de.titus.wot.community.manager.database.entities.CampaignRegistration;
import de.titus.wot.community.manager.database.entities.Member;
import de.titus.wot.community.manager.endpoints.entities.ListResponse;
import de.titus.wot.community.manager.security.AccessRights;
import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.NotFoundException;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

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
		List<CampaignRegistration> registrations = null;
		AccessRights accessRigts = this.getAccessRights();
		if (accessRigts.isManagement())
			registrations = this.campaignRegistrationRepository.findByCampaign(aCampaignId);
		else {
			registrations = new ArrayList<>();
			final Member member = this.getMember();
			final CampaignRegistration registration = this.campaignRegistrationRepository.findByCampaignAndMember(aCampaignId, member.getId());
			if (registration != null)
				registrations.add(registration);
		}

		return new ListResponse<>(registrations);
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
