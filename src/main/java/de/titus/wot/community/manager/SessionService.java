package de.titus.wot.community.manager;

import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import io.quarkus.scheduler.Scheduled;

/**
 * The Class SessionService.
 */
@ApplicationScoped
public class SessionService {

	private static final Logger LOGGER = LoggerFactory.getLogger(SessionService.class);

	/** The Constant SESSION_COOKIE_ID. */
	public static final String SESSION_COOKIE_ID = "anehctlsdjtehjsbkfdoejhsdkazle";

	/** The configuration. */
	@Inject
	Configuration configuration;

	/** The sessions. */
	private final Map<String, Session> sessions = new ConcurrentHashMap<>();

	/**
	 * The Class Session.
	 */
	public static class Session {

		/** The id. */
		private final String id = UUID.randomUUID().toString();

		/** The timeout. */
		private final long timeout;

		/** The expires at. */
		private long expiresAt;

		/** The data. */
		private final Map<String, Object> data = new ConcurrentHashMap<>();

		/**
		 * Instantiates a new session.
		 *
		 * @param aTimeout the a timeout
		 */
		public Session(final long aTimeout) {
			this.timeout = aTimeout;
			this.expiresAt = System.currentTimeMillis() + aTimeout;
		}

		/**
		 * Gets the id.
		 *
		 * @return the id
		 */
		public String getId() {
			return this.id;
		}

		/**
		 * Gets the expires at.
		 *
		 * @return the expires at
		 */
		public long getExpiresAt() {
			return this.expiresAt;
		}

		/**
		 * Gets the data.
		 *
		 * @param <T>      the generic type
		 * @param aKey     the a key
		 * @param aClass   the a class
		 * @param aDefault the a default
		 * @return the data
		 */
		public <T> T getData(final String aKey, final Class<T> aClass, final T aDefault) {
			Object value = this.data.getOrDefault(aKey, aDefault);
			if (value == null)
				return null;

			if (aClass.isInstance(value))
				return aClass.cast(value);

			return aDefault;
		}

		/**
		 * Sets the data.
		 *
		 * @param aKey  the a key
		 * @param aData the a data
		 */
		public void setData(final String aKey, final Object aData) {
			this.data.put(aKey, aData);
		}

		/**
		 * Valid.
		 *
		 * @param refresh the refresh
		 * @return true, if successful
		 */
		public boolean valid(final boolean refresh) {
			if (this.expiresAt < System.currentTimeMillis())
				return false;

			if (refresh)
				this.expiresAt = System.currentTimeMillis() + this.timeout;

			return true;
		}
	}

	/**
	 * Gets the session.
	 *
	 * @param aSessionId the a session id
	 * @param create     the create
	 * @return the session
	 */
	public Session getSession(final String aSessionId, final boolean create) {
		Session session = aSessionId == null ? null : this.sessions.get(aSessionId);
		if (session != null && !session.valid(true)) {
			this.sessions.remove(session.id);
			session = null;
		}

		if (session == null && create) {
			session = new Session(this.configuration.sessionTimeout());
			this.sessions.put(session.id, session);
		}

		return session;
	}

	/**
	 * Removes the session.
	 *
	 * @param aSessionId the a session id
	 */
	public void removeSession(final String aSessionId) {
		Session session = aSessionId == null ? null : this.sessions.get(aSessionId);
		if (session != null)
			this.sessions.remove(session.id);
	}

	/**
	 * Validate session.
	 */
	@Scheduled(every = "PT60M")
	public void validateSession() {
		SessionService.LOGGER.debug(String.format("validate %d sessions", this.sessions.size()));
		for (Session session : this.sessions.values())
			if (session.valid(false)) {
				SessionService.LOGGER.debug(String.format("remove session %s", session.id));
				this.sessions.remove(session.id);
			}
	}

}
