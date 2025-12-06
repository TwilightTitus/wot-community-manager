package de.titus.wot.community.manager.wotclient;

import org.eclipse.microprofile.rest.client.RestClientBuilder;

import de.titus.wot.community.manager.Configuration;
import io.quarkus.arc.DefaultBean;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.inject.Produces;
import jakarta.inject.Inject;

/**
 * The Class WotRestClientProducer.
 */
@ApplicationScoped
public class WotRestClientProducer {

	/** The configuration. */
	private final Configuration configuration;

	/**
	 * Instantiates a new wot rest client producer.
	 *
	 * @param aConfiguration the a configuration
	 */
	@Inject
	public WotRestClientProducer(final Configuration aConfiguration) {
		this.configuration = aConfiguration;
	}

	/**
	 * Produce.
	 *
	 * @return the i wot rest client
	 */
	@ApplicationScoped
	@Produces
	@DefaultBean
	public IWotRestClient produce() {
		return RestClientBuilder
				.newBuilder()
				.baseUri(this.configuration.wot().apiUrl())
				.build(IWotRestClient.class);
	}

}
