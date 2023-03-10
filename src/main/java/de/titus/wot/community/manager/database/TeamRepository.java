package de.titus.wot.community.manager.database;

import javax.enterprise.context.ApplicationScoped;

import de.titus.wot.community.manager.database.entities.Team;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

/**
 * The Class TeamRepository.
 */
@ApplicationScoped
public class TeamRepository implements PanacheRepository<Team>{

}
