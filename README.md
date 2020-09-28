# todo-express-server

docker:

    mysql
        #crear imagen
            docker build -t tareas-mysql .

        # construye el contenedor a partir de una imagen
        docker run -p 3306:3306 --name=ctareas_mysql tareas-mysql 
        
        docker exec -it ctareas_mysql bash


    app node
        #crear imagen
            docker build -t tareas-node .

            #borrar
                docker image rm tareas-node



        # construye el contenedor a partir de una imagen

        docker run -p 8080:5000 --name=ctareas_node -it --env-file ./.env --link ctareas_mysql tareas-node


docker-compose:
    docker-compose run --rm node npm i

    docker-compose up -d

    docker-compose exec node bash