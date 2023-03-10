package de.titus.wot.community.manager.database;

import javax.enterprise.context.ApplicationScoped;

import de.titus.wot.community.manager.database.entities.Clan;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

@ApplicationScoped
public class ClanRepository implements PanacheRepository<Clan>{

}
