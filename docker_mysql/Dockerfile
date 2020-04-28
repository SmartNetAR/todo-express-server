## Pull the mysql:5.7 image
FROM mysql:5.7

## The maintainer name and email
MAINTAINER Leo <leonardo@smartnet.com.ar>

# database = test and password for root = password
ENV MYSQL_DATABASE=tareas_db \
    MYSQL_ROOT_PASSWORD=password

# when container will be started, we'll have `test` database created with this schema
COPY ./tareas-dump.sql /docker-entrypoint-initdb.d/