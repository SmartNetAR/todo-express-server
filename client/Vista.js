class Vista {
    constructor(controlador) {
        this.controlador = controlador
    }
    async load() {
        try {
            const data = await this.controlador.obtenerTodos()
            this.render(data)

        } catch (error) {
            if (error == "TypeError: Failed to fetch") {
                mostrarError("No se pudo conectar al servidor");
            }
        }


        document.addEventListener("submit", (evento) => {
            evento.preventDefault();
            var titulo = document.getElementById("titulo").value;
            var descripcion = document.getElementById("descripcion").value;
            var complejidad = parseInt(document.getElementById("complejidad").value);
            var tarea = { titulo, descripcion, complejidad };
            agregarTarea(tarea);
            evento.target.reset();

        })
    }

    render(tareas) {
        console.log("tareas", tareas)
        borrarTablas();
        tareas.forEach(cargarRegistroTabla);
    }
}

function cargarRegistroTabla(tarea) {

    var tabla = document.getElementById("tabla1").lastElementChild;

    var fila = document.createElement("tr");

    var celda = document.createElement("td");
    celda.textContent = tarea.titulo;
    fila.appendChild(celda);

    var celda = document.createElement("td");
    celda.textContent = tarea.descripcion;
    fila.appendChild(celda);

    var celda = document.createElement("td");
    celda.textContent = tarea.complejidad;
    fila.appendChild(celda);

    var celda = document.createElement("td");
    const $btnEditar = document.createElement("button");
    $btnEditar.textContent = "Editar";
    $btnEditar.className = "btn btn-primary"
    $btnEditar.addEventListener("click", function (e) {
        editarTarea(tarea);
    });

    const $btnEliminar = document.createElement("button");
    $btnEliminar.textContent = "Eliminar";
    $btnEliminar.className = "btn btn-danger float-right"
    $btnEliminar.addEventListener("click", function (e) {
        borrarTarea(tarea);
    });

    celda.appendChild($btnEditar);
    celda.appendChild($btnEliminar);

    fila.appendChild(celda);
    tabla.appendChild(fila);

}

const editarTarea = (tarea) => {
    console.log(tarea);
}

const borrarTarea = async (tarea) => {

    const urlBase = 'http://localhost:5000'
    const options = {
        method: "DELETE"
    }

    try {
        await fetch(`${urlBase}/tareas/${tarea.id}` , options)


        const respuesta = await fetch( `${urlBase}/tareas/` );
        const tareas = await respuesta.json();

        borrarTablas();
        tareas.forEach(cargarRegistroTabla);
        
    } catch (error) {
        mostrarError(error);
    }
}
const agregarTarea = async (tarea) => {

    const newTask = 
    {
        "titulo": tarea.titulo,
        "duracion": 60,
        "descripcion": tarea.descripcion,
        "terminada": false,
        "usuario": "mina",
        "id_complejidad": tarea.complejidad
    }

    const urlBase = 'http://localhost:5000'
    const options = {
        method: "POST",
        body: JSON.stringify( newTask ),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        await fetch(`${urlBase}/tareas/`, options);


        const respuesta = await fetch( `${urlBase}/tareas/` );
        const tareas = await respuesta.json();

        borrarTablas();
        tareas.forEach(cargarRegistroTabla);
        
    } catch (error) {
        mostrarError(error);
    }
}

function borrarTablas() {
    document.getElementById("tabla1").lastElementChild.innerHTML = "";
}

const mostrarError = (textoError) => {
    const $div = document.getElementById("error");
    $div.innerHTML = `<h3>${textoError}</h3>`;

}