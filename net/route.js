const express = require("express");
const moneda = require("../moneda/routes/moneda");

const routes = function(server){
    server.use('/crudcoinx', moneda)
}

module.exports = routes;