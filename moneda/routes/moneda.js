const express = require("express");
const router = express.Router();
const response = require("../../net/response")
const controller = require("../controller/moneda_controller")

router.get('/', (req, res) =>{
    controller.listar_monedas().then(() =>{response.correcto(req, res, "Datos Recibidos", 201)})
    .catch( () => { response.errores(req, res, "no se ha podido completar", 501)})
})

router.post('/', (req, res) =>{
    console.log(req.body);
    controller.InsertMoneda(req.body.nombre, req.body.precio, req.body.simbolo, req.body.imagen)
    .then((data) =>{ response.correcto(req, res, "Datos Almacenados.!", 202) } )
    .catch( (e) => {console.log(e) } )
})

router.patch('/:id', (req, res) =>{
   controller.editar_moneda(req.params.id, req.body.nombre, req.body.precio, req.body.simbolo, req.body.imagen).then( () => 
   { response.correcto(req, res, "Datos Actualizados.!", 202) } ).catch(() => {
    response.errores(req, res, "Actualizacion Fallida", 500)
   } )
})

router.delete('/:id', (req, res) =>{
    controller.borrar_moneda( req.params.id).then( (data) =>
    { response.correcto(req, res, "Hemos Borrado tu Moneda", 201) } )
    .catch( e  => { response.errores(req, res, "No hemos podido Borrar", 500) })
})


module.exports = router;