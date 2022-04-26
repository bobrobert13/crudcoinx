

exports.correcto = function(req, res, mensaje, data, status) {
        let ServerResponse = data
        res.status(status).send({
        'error':'',
        'true': mensaje,
        'res': ServerResponse
    })
    }

exports.errores = function(req, res, mensaje, data, status) {
        let ServerResponse = data
        res.status(status).send(
            {
                'false': mensaje,
                'error':'Error Peticion',
                'res':  ServerResponse
            }
        )
}
