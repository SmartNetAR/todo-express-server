# todo-express-server

docker:

    mysql
        #crear imagen
            docker build -t tareas-mysql .

        # docker run -it -p 3606:3606  tareas-mysql bash

        # construye el contenedor a partir de una imagen
        docker run -P --name=ctareas_mysql tareas-mysql 
        docker run -p 3606:3606 --name=ctareas_mysql tareas-mysql 
        
        docker exec -it ctareas_mysql bash


    app node
        #crear imagen
            docker build -t tareas-node .

            #borrar
                docker image rm tareas-node



        # construye el contenedor a partir de una imagen
        docker run -p 8080:5000 -it tareas-node


        docker run -p 8080:5000 --name=ctareas_node -it --env-file ./.env --link ctareas_mysql tareas-node