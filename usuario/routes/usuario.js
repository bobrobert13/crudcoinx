const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const response = require("../../net/response")
const controller = require("../controller/usuario_controller")

router.post('/login', (req, res) =>{
    controller.LoginUsuario(req.body.correo, req.body.clave)
    .then( (data) => { response.correcto(req, res, "acceso", data, 201) } )
    .catch( (error) => { response.errores(req, res, "Error de Peticion", false, 501) } )

})

router.post('/registro', (req, res) =>{
   controller.RegistraUsuario(req.body.nombre, req.body.correo, req.body.clave)
   .then((data) => { response.correcto(req, res, "Registrado", data, 201) })
   .catch( () => { response.errores(req, res, "no se ha podido completar", false, 501)})
})



module.exports = router;
