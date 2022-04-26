const mongoose = require('mongoose');

const Squema = mongoose.Schema;

const UsuarioSchema = new Squema({
    nombre: String,
    correo: String,
    clave: String
});
const modelUser = mongoose.model('usuario', UsuarioSchema);
module.exports = modelUser;