package de.titus.wot.community.manager.database.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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
public class Member {
	
	/** The id. */
	@Id
	private Long id;

	/** The clanid. */
	private Long clanid;
	
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
