#!/bin/bash
#combine docker compose file
COMPOSE_FILES="-f devops/docker-compose.yaml"
NAME_PREFIX=digicode-devops-course

#ensure that old containers are removed
docker-compose -p $NAME_PREFIX $COMPOSE_FILES rm -f

#start application localy for development with shared folders
docker-compose -p $NAME_PREFIX $COMPOSE_FILES build --pull
docker-compose -p $NAME_PREFIX $COMPOSE_FILES up -d --force-recreate
#docker-compose -p $NAME_PREFIX $COMPOSE_FILES exec api bash
