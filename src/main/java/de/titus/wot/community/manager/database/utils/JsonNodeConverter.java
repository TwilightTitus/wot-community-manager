package de.titus.wot.community.manager.database.utils;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Converter(autoApply = true)
@ApplicationScoped
public class JsonNodeConverter implements AttributeConverter<JsonNode, String> {

	@Inject
	ObjectMapper mapper;

	@Override
	public String convertToDatabaseColumn(final JsonNode attribute) {
		try {
			return this.mapper.writeValueAsString(attribute);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	@Override
	public JsonNode convertToEntityAttribute(final String dbData) {
		try {
			return this.mapper.readTree(dbData);
		} catch (JsonProcessingException e) {
			throw new RuntimeException(e);
		}
	}
}
