package de.titus.wot.community.manager.database.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.quarkus.runtime.annotations.RegisterForReflection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

/**
 * The Class Member.
 *
 * @author Titus
 */
@Entity
@Data
@ToString
@EqualsAndHashCode
@JsonIgnoreProperties(ignoreUnknown = true)
@RegisterForReflection
public class Member {

	/** The id. */
	@Id
	private Long id;

	/** The clanid. */
	private Long clanId;

	/** The clanname. */
	private String clanname;

	/** The clantag. */
	private String clantag;

	/** The name. */
	private String name;

	/** The role. */
	private String role;

	/** The wtr. */
	private String wtr;

}
