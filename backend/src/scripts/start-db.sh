#!/bin/bash
set -e

ID="";

if [ -f .env ]
then
  export $(cat .env | sed 's/#.*//g' | xargs)
fi

echo "Stop & remove old docker [$DB_CONTAINER] and starting new fresh instance of [$DB_CONTAINER] ..."
(docker kill $DB_CONTAINER || :) && \
  (docker rm $DB_CONTAINER || :) && \
  docker run --name $DB_CONTAINER -e POSTGRES_PASSWORD=$DB_PASSWORD \
  -e PGPASSWORD=$DB_PASSWORD \
  -p 5432:5432 \
  -d postgres

echo "Sleep wait for pg-server [$DB_CONTAINER] to start...";
while [ -z $ID ]
do
  SLEEP 1
  ID=`docker ps -aqf "name=$DB_CONTAINER"`
done

echo "CREATE DATABASE PostGreSql ENCODING 'UTF-8';" | docker exec -i $DB_CONTAINER psql -U postgres
echo "\l" | docker exec -i $DB_CONTAINER psql -U postgres

OK=`ls ./postgres_data`
if [ $OK == "save.sql" ]; then
  echo "Restore old data ..."
  docker cp ./postgres_data/save.sql $DB_CONTAINER:/save.sql
  docker exec -i $DB_CONTAINER psql -U $DB_SUPERUSER -f save.sql
fi
