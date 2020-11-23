drop database if exists docker_db;

create database docker_db;
use docker_db;

create table lists (
  id integer auto_increment,
  value text,
  primary key (id)
);
