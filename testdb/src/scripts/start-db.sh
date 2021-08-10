#!/bin/bash
set -e

SERVER="test-db";
PW="root";
DB="testdb";
ID="";
NAME="postgres";

echo "Stop & remove old docker [$SERVER] and starting new fresh instance of [$SERVER] ..."
(docker kill $SERVER || :) && \
  (docker rm $SERVER || :) && \
  docker run --name $SERVER -e POSTGRES_PASSWORD=$PW \
  -e PGPASSWORD=$PW \
  -p 5432:5432 \
  -d postgres

echo "Sleep wait for pg-server [$SERVER] to start...";
while [ -z $ID ]
do
  SLEEP 1
  ID=`docker ps -aqf "name=$SERVER"`
done

echo "CREATE DATABASE $DB ENCODING 'UTF-8';" | docker exec -i $SERVER psql -U postgres
echo "\l" | docker exec -i $SERVER psql -U postgres

OK=`ls ./postgres_data`
if [ $OK == "save.sql" ]; then
  echo "Restore old data ..."
  docker cp ./postgres_data/save.sql $SERVER:/save.sql
  docker exec -i $SERVER psql -U $NAME -f save.sql
fi
