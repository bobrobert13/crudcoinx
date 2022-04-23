const express = require("express");
const moneda = require("../moneda/routes/moneda");

const routes = function(server){
    server.use('/', moneda)
}

module.exports = routes;