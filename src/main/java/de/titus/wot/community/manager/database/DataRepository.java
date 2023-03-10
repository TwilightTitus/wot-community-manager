package de.titus.wot.community.manager.database;

import javax.enterprise.context.ApplicationScoped;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import lombok.Data;

/**
 * The Class DataRepository.
 */
@ApplicationScoped
public class DataRepository implements PanacheRepository<Data>{

}
