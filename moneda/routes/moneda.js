const express = require("express");
const router = express.Router();
const response = require("../../net/response")
const controller = require("../controller/moneda_controller")

router.get('/', (req, res) =>{
    const one = req.query.moneda || null
    controller.listar_monedas(one).then((data) =>{response.correcto(req, res, "Hecho", data, 201)})
    .catch( () => { response.errores(req, res, "no se ha podido completar",false, 501)})
})

router.post('/', (req, res) =>{
    console.log(req.body);
    controller.InsertMoneda(req.body.nombre, req.body.precio, req.body.simbolo,req.body.descripcion, req.body.imagen)
    .then((data) =>{ response.correcto(req, res, "Moneda Creada", true, 202) } )
    .catch( (e) =>  { response.errores(req, res, "no se ha podido completar",false, 501)} )
})

router.patch('/:id', (req, res) =>{
    console.log(req.params.id)
   controller.editar_moneda(req.params.id, req.body.nombre, req.body.precio, req.body.simbolo, req.body.imagen).then( () =>
   { response.correcto(req, res, "Hecho",true, 202) } ).catch(() => {
    response.errores(req, res, "Actualizacion Fallida",false, 500)
   } )
})

router.delete('/:id', (req, res) =>{
    controller.borrar_moneda( req.params.id).then( (data) =>
    { response.correcto(req, res, "Has Borrado tu Moneda", true ,201) } )
    .catch( e  => { response.errores(req, res, "No hemos podido Borrar", false, 500) })
})

router.post('/buscar', (req, res) =>{
    controller.buscar(req.body.nombre)
    .then((data) => { response.correcto(req, res, "find", data, 201) })
    .catch( () => { response.errores(req, res, "no se ha podido completar", false, 501)})
 })




module.exports = router;
