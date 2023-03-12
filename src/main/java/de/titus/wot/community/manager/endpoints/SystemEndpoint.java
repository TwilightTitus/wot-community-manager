package de.titus.wot.community.manager.endpoints;

import java.net.URI;
import java.net.URISyntaxException;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.http.client.utils.URIBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import de.titus.wot.community.manager.Configuration;
import de.titus.wot.community.manager.Constants;
import de.titus.wot.community.manager.SessionService.Session;
import de.titus.wot.community.manager.database.MemberRepository;
import de.titus.wot.community.manager.database.entities.Member;
import de.titus.wot.community.manager.security.AccessRights;
import de.titus.wot.community.manager.security.LoginData;
import de.titus.wot.community.manager.wotclient.WotClient;
import de.titus.wot.community.manager.wotclient.entities.WotAccount;
import io.quarkus.security.UnauthorizedException;

/**
 * The Class SystemEndpoint.
 */
@Path("/api/system")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@RequestScoped
@Transactional
public class SystemEndpoint extends BaseEndpoint {

	/** The Constant LOGGER. */
	private static final Logger LOGGER = LoggerFactory.getLogger(SystemEndpoint.class);

	/** The redirecturi. */
	private static URI REDIRECTURI = null;

	/** The configuration. */
	@Inject
	Configuration configuration;

	/** The wot client. */
	@Inject
	WotClient wotClient;

	/** The member repository. */
	@Inject
	MemberRepository memberRepository;

	/**
	 * Do access.
	 *
	 * @return the response
	 */
	@GET
	@Path("/access")
	public Response doAccess() {
		LoginData loginData = this.getLoginData();
		if (loginData == null)
			throw new UnauthorizedException();

		if (loginData.getExpireAt() - System.currentTimeMillis() > 1000)
			this.refeshWotLogin(loginData);

		return Response.ok(loginData).build();
	}

	/**
	 * Refesh wot login.
	 *
	 * @param loginData the login data
	 */
	private void refeshWotLogin(final LoginData loginData) {
		// TODO Auto-generated method stub

	}

	/**
	 * Do login.
	 *
	 * @param anAccessToken the an access token
	 * @param anAccountId   the an account id
	 * @param theExpiresAt  the the expires at
	 * @return the response
	 */
	@GET
	@Path("/login")
	public Response doLogin(@QueryParam("access_token") final String anAccessToken, @QueryParam("account_id") final String anAccountId, @QueryParam("expires_at") final Long theExpiresAt) {

		SystemEndpoint.LOGGER.debug(String.format("accessToke: %s, accoundId: %s, expiresAt: %s", anAccessToken, anAccountId, theExpiresAt));

		LoginData loginData = this.getLoginData();
		if (loginData != null)
			return Response.ok(loginData).build();

		if (anAccessToken == null || anAccountId == null || theExpiresAt == null)
			return Response.temporaryRedirect(this.buildWotLoginRedirect()).build();

		final WotAccount account = this.wotClient.getAccountWithPrivateData(anAccountId, anAccessToken);
		if (account.getWotPrivate() == null)
			return Response.temporaryRedirect(this.buildWotLoginRedirect()).build();

		final Member member = this.memberRepository.findById(Long.parseLong(anAccountId));
		if (member == null || member.getRole() == null || Constants.MEMBER_ROLE__EXMEMBER.equalsIgnoreCase(member.getRole()))
			throw new UnauthorizedException("Unknown member!");

		Session session = this.getSession(true);
		loginData = this.buildLoginData(anAccessToken, theExpiresAt, member, session);

		return Response
				.temporaryRedirect(URI.create(this.configuration.externalUrl()))
				.cookie(this.toSessionCookie(session))
				.build();

	}

	/**
	 * Do logout.
	 *
	 * @return the response
	 */
	@GET
	@Path("/logout")
	public Response doLogout() {
		this.removeSession();
		return Response
				.temporaryRedirect(URI.create(this.configuration.externalUrl()))
				.cookie(this.toSessionCookie(null))
				.build();
	}

	/**
	 * Builds the login data.
	 *
	 * @param anAccessToken the an access token
	 * @param theExpiresAt  the the expires at
	 * @param aMember       the a member
	 * @param session       the session
	 * @return the login data
	 */
	private LoginData buildLoginData(final String anAccessToken, final Long theExpiresAt, final Member aMember, final Session session) {
		final LoginData loginData = new LoginData();
		loginData.setAccesToken(anAccessToken);
		loginData.setExpireAt(System.currentTimeMillis() + theExpiresAt);
		loginData.setMember(aMember);
		loginData.setAccessRights(this.createAccessRights(aMember));

		this.setLoginDataIntoSession(loginData);

		return loginData;
	}

	/**
	 * Creates the access rights.
	 *
	 * @param aMember the a member
	 * @return the access rights
	 */
	private AccessRights createAccessRights(final Member aMember) {
		final AccessRights accessRights = new AccessRights();

		accessRights.setAccess(aMember.getClanid() != null && aMember.getRole() != null && !Constants.MEMBER_ROLE__EXMEMBER.equalsIgnoreCase(aMember.getRole()));
		accessRights.setManagement(this.configuration.allowedManagementRoles().contains(aMember.getRole()));

		return accessRights;
	}

	/**
	 * Builds the wot login redirect.
	 *
	 * @return the uri
	 */
	private URI buildWotLoginRedirect() {
		if (SystemEndpoint.REDIRECTURI == null) {
			try {
				SystemEndpoint.REDIRECTURI = new URIBuilder(this.configuration.wotLoginUrl())
						.addParameter("application_id", this.configuration.applicationid())
						.addParameter("display", "page")
						.addParameter("nofollow", "0")
						.addParameter("redirect_uri", this.configuration.externalUrl() + "/api/system/login")
						.build();
			} catch (URISyntaxException e) {
				throw new RuntimeException(e);
			}
		}

		return SystemEndpoint.REDIRECTURI;
	}

}
