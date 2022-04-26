const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const response = require("../../net/response")
const controller = require("../controller/usuario_controller")

router.get('/usuarios', (req, res) =>{
    controller.usuarios().then(() =>{response.correcto(req, res, "Datos Recibidos", 201)})
    .catch( () => { response.errores(req, res, "no se ha podido completar", 501)})
})

router.post('/login', (req, res) =>{
    console.log(req.body)
    controller.LoginUsuario(req.body.correo, req.body.pass)
    .then( (data) => { response.correcto(req, res, "acceso", data, 201) } )
    .catch( (error) => { response.errores(req, res, "Error de Peticion", false, 501) } )

})

router.post('/registro', (req, res) =>{
    console.log(req.body)
   controller.RegistraUsuario(req.body.nombre, req.body.email, req.body.pass)
   .then((data) => { response.correcto(req, res, "Registrado", data.nombre, 201) })
   .catch( () => { response.errores(req, res, "no se ha podido completar", false, 501)})
})

module.exports = router;
