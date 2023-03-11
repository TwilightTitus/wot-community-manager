package de.titus.wot.community.manager.endpoints;

import javax.inject.Inject;
import javax.ws.rs.CookieParam;
import javax.ws.rs.core.Cookie;
import javax.ws.rs.core.NewCookie;

import de.titus.wot.community.manager.Configuration;
import de.titus.wot.community.manager.SessionService;
import de.titus.wot.community.manager.SessionService.Session;
import de.titus.wot.community.manager.database.entities.Member;
import de.titus.wot.community.manager.security.AccessRights;
import de.titus.wot.community.manager.security.LoginData;
import io.quarkus.security.UnauthorizedException;

/**
 * The Class BaseEndpoint.
 */
public class BaseEndpoint {

	/** The Constant SESSION_DATA__ACCESSTOKEN. */
	public static final String SESSION_DATA__ACCESSTOKEN = "access-token";

	/** The Constant SESSION_DATA__ACCOUNTID. */
	public static final String SESSION_DATA__ACCOUNTID = "account-id";

	/** The Constant SESSION_DATA__MEMBER. */
	public static final String SESSION_DATA__MEMBER = "member";

	/** The configuration. */
	@Inject
	Configuration configuration;

	/** The session service. */
	@Inject
	SessionService sessionService;

	/** The session id. */
	@CookieParam(SessionService.SESSION_COOKIE_ID)
	private String sessionId;

	/** The session. */
	private Session session;

	/** The access rights. */
	private AccessRights accessRights;

	/** The login data. */
	private LoginData loginData;

	/**
	 * To cookie.
	 *
	 * @param aSession the a session
	 * @return the new cookie
	 */
	public NewCookie toSessionCookie(final Session aSession) {
		Cookie cookie = new Cookie(SessionService.SESSION_COOKIE_ID, aSession != null ? aSession.getId() : "", "/", null);
		return new NewCookie(cookie);
	}

	/**
	 * Removes the session.
	 */
	void removeSession() {
		this.sessionService.removeSession(this.sessionId);
	}

	/**
	 * Gets the session.
	 *
	 * @param create the create
	 * @return the session
	 */
	Session getSession(final boolean create) {
		if (this.session == null) {
			this.session = this.sessionService.getSession(this.sessionId, create);
			if (this.session == null)
				return null;

			this.sessionId = this.session.getId();
		}
		return this.session;
	}

	/**
	 * Sets the login data into session.
	 *
	 * @param aLoginData the a login data
	 */
	public void setLoginDataIntoSession(final LoginData aLoginData) {
		Session session = this.getSession(false);
		if (session != null) {
			session.setData(LoginData.SESSION_KEY, aLoginData);
			this.loginData = aLoginData;
		}
	}

	/**
	 * Gets the login data from session.
	 *
	 * @return the login data from session
	 */
	public LoginData getLoginData() {
		if (this.loginData == null) {
			Session session = this.getSession(false);
			if (session == null)
				return null;

			this.loginData = this.session.getData(LoginData.SESSION_KEY, LoginData.class, null);
		}

		return this.loginData;
	}

	/**
	 * Gets the access rights.
	 *
	 * @return the access rights
	 */
	public AccessRights getAccessRights() {
		if (this.accessRights == null) {
			LoginData loginData = this.getLoginData();
			this.accessRights = loginData != null ? loginData.getAccessRights() : new AccessRights();
		}

		return this.accessRights;
	}

	/**
	 * Gets the member.
	 *
	 * @return the member
	 */
	public Member getMember() {
		LoginData loginData = this.getLoginData();
		return loginData != null ? loginData.getMember() : null;
	}

	/**
	 * Checks if is member access.
	 *
	 * @return true, if successful
	 */
	public boolean hasMemberAccess() {
		AccessRights accessRigts = this.getAccessRights();
		if (accessRigts == null || !accessRigts.isAccess())
			throw new UnauthorizedException();

		return true;
	}

	/**
	 * Checks for management access.
	 *
	 * @return true, if successful
	 */
	public boolean hasManagementAccess() {
		this.hasMemberAccess();
		AccessRights accessRigts = this.getAccessRights();
		if (!accessRigts.isManagement())
			throw new UnauthorizedException();

		return true;
	}

}
