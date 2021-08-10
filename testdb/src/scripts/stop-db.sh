#!/bin/bash
set -e

SERVER="test-db";
PW="root";
DB="testdb";
NAME="postgres";

docker exec -i $SERVER pg_dumpall -U $NAME > ./postgres_data/save.sql
