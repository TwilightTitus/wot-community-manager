package de.titus.wot.community.manager.database.entities;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.quarkus.runtime.annotations.RegisterForReflection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

/**
 * The Class Message.
 */
@Entity
@Data
@ToString
@EqualsAndHashCode
@JsonIgnoreProperties(ignoreUnknown = true)
@RegisterForReflection
public class Message {

	/**
	 * The Enum TYPE.
	 */
	public static enum TYPE {

		/** The notification. */
		NOTIFICATION,

		/** The member. */
		MEMBER
	}

	/** The id. */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	/** The type. */
	@Enumerated(EnumType.STRING)
	private TYPE type;

	/** The reference. */
	private Long reference;

	/** The editorid. */
	private Long editorid;

	/** The text. */
	@Lob
	private String text;

	/** The created. */
	@CreationTimestamp
	private LocalDateTime created;

	/** The updated. */
	@UpdateTimestamp
	private LocalDateTime updated;
}
