class Controlador {
    constructor() {
    }

    // obtenerTodos() {
    //     return fetch("http://localhost:5000/tareas")
    //         .then( function( respuesta ) {
    //             return respuesta.json()
    //         })
    //         .then( function ( tareas ) {
    //             return tareas
    //         } )
    // }

    async obtenerTodos() {
        try {
            const respuesta = await fetch("http://localhost:5000/tareas")
            return await respuesta.json()
            
        } catch (error) {
            // console.error("hubo un error")
            throw error
        }

    }

    obtenerUno( id ) {
        const tarea = {
            "id": 2,
            "titulo": "tarea 2",
            "duracion": 60,
            "descripcion": "descripcion dos",
            "terminada": 0,
            "usuario": "leo",
            "complejidad": "baja"
        }
        return tarea;
    }

    borrar ( id ) {
        console.log(id)
    }
}