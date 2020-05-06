## Pull the mysql image https://hub.docker.com/_/mysql
FROM mysql:5.7.30

## The maintainer name and email
MAINTAINER Leo <leonardo@smartnet.com.ar>

# database = tareas_db and password for root = pass
ENV MYSQL_DATABASE=tareas_db \
    MYSQL_ROOT_PASSWORD=pass

# when container will be started, we'll have `tareas` database created with this schema
ADD tareas-dump.sql /docker-entrypoint-initdb.d

EXPOSE 3306