const express = require("express");
const moneda = require("../moneda/routes/moneda");
const usuario = require("../usuario/routes/usuario");

const routes = function(server){
    server.use('/crudcoinx', moneda);
    server.use('/crudcoinx/users', usuario);
}

module.exports = routes;