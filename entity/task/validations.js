exports.validate = function ( req, res, next ) {
    const { titulo, id_complejidad } = req.body;

    if ( !titulo || !id_complejidad ) {
        res.status(422).json("debe incluir un título y su id_complejidad");
    } else {
        next();
    }
}
