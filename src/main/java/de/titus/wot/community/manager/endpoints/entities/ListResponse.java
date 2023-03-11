package de.titus.wot.community.manager.endpoints.entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

/**
 * Instantiates a new response.
 *
 * @param <T> the generic type
 */
@Getter
@EqualsAndHashCode
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class ListResponse<T> {

	/** The total. */
	private final int total;

	/** The data. */
	private final List<T> data;

	/**
	 * Instantiates a new list response.
	 *
	 * @param aData  the a data
	 * @param aTotal the a total
	 */
	public ListResponse(final List<T> aData, final int aTotal) {
		this.data = aData;
		this.total = aTotal;
	}

	/**
	 * Instantiates a new list response.
	 *
	 * @param aData the a data
	 */
	public ListResponse(final List<T> aData) {
		this.data = aData;
		this.total = aData != null ? aData.size() : 0;
	}

}
