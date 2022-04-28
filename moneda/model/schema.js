const mongoose = require('mongoose');
const Double  =  require ( '@mongoosejs/double' ) ;

const Squema = mongoose.Schema;

const MonedaSchema = new Squema({
    nombre: String,
    precio: Double,
    simbolo: String,
    descripcion: String,
    imagen: String

});
const modelMoneda = mongoose.model('moneda', MonedaSchema);
module.exports = modelMoneda;
