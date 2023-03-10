package de.titus.wot.community.manager.database;

import javax.enterprise.context.ApplicationScoped;

import de.titus.wot.community.manager.database.entities.Message;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

/**
 * The Class MessageRepository.
 */
@ApplicationScoped
public class MessageRepository implements PanacheRepository<Message>{

}
