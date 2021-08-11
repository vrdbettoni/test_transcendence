#!/bin/bash
set -e

if [ -f .env ]
then
  export $(cat .env | sed 's/#.*//g' | xargs)
fi

docker exec -i $DB_CONTAINER pg_dumpall -U $DB_SUPERUSER > ./postgres_data/save.sql
docker kill $DB_CONTAINER