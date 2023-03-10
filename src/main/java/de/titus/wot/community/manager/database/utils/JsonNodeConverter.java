package de.titus.wot.community.manager.database.utils;

import javax.inject.Inject;
import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Converter(autoApply = true)
public class JsonNodeConverter implements AttributeConverter<JsonNode, String> {
	
	@Inject
	ObjectMapper mapper;

	@Override
	public String convertToDatabaseColumn(JsonNode attribute) {
		try {
			return mapper.writeValueAsString(attribute);
		}catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	@Override
	public JsonNode convertToEntityAttribute(String dbData) {		
		try {
			return mapper.readTree(dbData);
		} catch (JsonProcessingException e) {
			throw new RuntimeException(e);
		}
	}
}
