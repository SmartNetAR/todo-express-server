module.exports = {
    obtenerTodas: `
        SELECT t.id, t.titulo, t.duracion, t.descripcion, t.terminada, t.usuario, c.nombre AS complejidad
            FROM tasks t
                JOIN complejidad c ON t.id_complejidad = c.id
        `,
    obtenerPorId: `
        SELECT id, titulo, duracion, descripcion, terminada, usuario, id_complejidad
            FROM tasks WHERE id = ?
        `,
    eliminarPorId: `
        DELETE FROM tasks WHERE id = ?
        `,
    agregar: `
        INSERT INTO
            tasks
                ( titulo, duracion, descripcion, terminada, usuario, id_complejidad )
                VALUES
                    ( ?, ?, ?, ?, ?, ? )
        `,
    agregarConNombreComplejidad: `
        INSERT INTO tasks ( titulo, duracion, descripcion, terminada, usuario, id_complejidad ) VALUES 
        ( ?, ?, ?, ?, ?, ( SELECT id FROM complejidad WHERE nombre = ?) );
    `
}