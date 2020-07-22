#!/bin/bash
#combine docker compose file
COMPOSE_FILES="-f devops/docker-compose.yml -f devops/local/docker-compose-local.yml"
NAME_PREFIX=nest-js-training

#ensure that old containers are removed
docker-compose -p $NAME_PREFIX $COMPOSE_FILES rm -f

#start application localy for development with shared folders
docker-compose -p $NAME_PREFIX $COMPOSE_FILES build --pull
docker-compose -p $NAME_PREFIX $COMPOSE_FILES up -d --force-recreate

