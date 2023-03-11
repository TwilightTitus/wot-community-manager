package de.titus.wot.community.manager.database.utils;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

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
