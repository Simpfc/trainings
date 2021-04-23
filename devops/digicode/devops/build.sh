#!/bin/bash
#combine docker compose file
COMPOSE_FILES="-f ./docker-compose.yaml"
NAME_PREFIX=digicode-devops-course

docker-compose -p $NAME_PREFIX $COMPOSE_FILES rm -f
docker-compose -p $NAME_PREFIX $COMPOSE_FILES build --pull
docker-compose -p $NAME_PREFIX $COMPOSE_FILES up -d --force-recreate
