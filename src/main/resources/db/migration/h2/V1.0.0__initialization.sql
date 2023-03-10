drop table if exists Campaign CASCADE ;

drop table if exists CampaignRegistration CASCADE ;

drop table if exists Clan CASCADE ;

drop table if exists Data CASCADE ;

drop table if exists Member CASCADE ;

drop table if exists Message CASCADE ;

drop table if exists Team CASCADE ;

drop sequence if exists hibernate_sequence;


create sequence hibernate_sequence start with 1 increment by 1;

create table Campaign (
   id bigint not null,
    endDate date,
    name varchar(255),
    payload clob,
    startDate date,
    primary key (id)
);

create table CampaignRegistration (
   campaignid bigint not null,
    memberid bigint not null,
    availability clob,
    fullyavailable boolean not null,
    primary key (campaignid, memberid)
);

create table Clan (
   id bigint not null,
    name varchar(255),
    tag varchar(255),
    primary key (id)
);

create table Data (
   id bigint not null,
    reference bigint,
    text clob,
    type varchar(255),
    primary key (id)
);

create table Member (
   id bigint not null,
    clanid bigint,
    clanname varchar(255),
    clantag varchar(255),
    name varchar(255),
    role varchar(255),
    wtr varchar(255),
    primary key (id)
);

create table Message (
   id bigint not null,
    created timestamp,
    memberid bigint,
    reference bigint,
    text clob,
    type varchar(255),
    updated timestamp,
    primary key (id)
);

create table Team (
   id bigint not null,
    campaignid bigint not null,
    name varchar(255),
    payload clob,
    primary key (id)
);