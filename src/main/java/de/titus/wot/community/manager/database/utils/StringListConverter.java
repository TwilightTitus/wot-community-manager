package de.titus.wot.community.manager.database.utils;

import java.util.Set;

import jakarta.inject.Inject;
import jakarta.persistence.AttributeConverter;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * The Class StringListConverter.
 */
public class StringListConverter implements AttributeConverter<Set<String>, String> {
		
	/** The mapper. */
	@Inject
	ObjectMapper mapper;	
	
	
	/**
	 * Convert to database column.
	 *
	 * @param attribute the attribute
	 * @return the string
	 */
	@Override
	public String convertToDatabaseColumn(Set<String> attribute) {
		try {
			return mapper.writeValueAsString(attribute);
		}catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	/**
	 * Convert to entity attribute.
	 *
	 * @param dbData the db data
	 * @return the sets the
	 */
	@Override
	public Set<String> convertToEntityAttribute(String dbData) {
		try {
			return mapper.readValue(dbData, new TypeReference<Set<String>>(){});
		} catch (JsonProcessingException e) {
			throw new RuntimeException(e);
		}
	}
}
