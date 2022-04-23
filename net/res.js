exports.correcto = function(req, res, mensaje, status) {
        res.status(status).send({
        'error':'',
        'true': mensaje + ' ' + status
    })
    }

exports.errores = function(req, res, mensaje, status) {
        res.status(status).send(
            {
                'error': mensaje,
                'false':'Error ' + status
            }
        )
}