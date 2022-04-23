const mongoose = require('mongoose');

const Squema = mongoose.Schema;

const MonedaSchema = new Squema({
    nombre: String,
    precio: Number,
    simbolo: String,
    imagen: String

});
const modelMoneda = mongoose.model('moneda', MonedaSchema);
module.exports = modelMoneda;