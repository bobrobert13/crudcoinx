/*
Notas Robert::Usuarios
Registro: Validacion Basica, Insertar. listo.
Login: Verificar Usuario existente con email y pass, retornar usuario encontrado.
*/
const usuarioStore = require('../model/db.js');
const usuario = require('../model/mook')


function RegistraUsuario(nombre, email, pass) {
    return new Promise( (resolve, reject) => {
    /*  if (!nombre && !email && !pass) {
        reject("Falta Informacion por llenar")
        return "Falta Informacion por llenar"

      }*/
        usuarioStore.crear(nombre, email, pass)
        resolve(usuario);
    });

}

function LoginUsuario(email, pass) {
    return new Promise( async (resolve, reject) => {
            if (!email && !pass) {
            console.log("Datos Nulos");
            reject("Faltaron Datos")
            }

            const usuario = await usuarioStore.entrar(email, pass)
            resolve(usuario)
            return usuario

    });

}





module.exports = {
    RegistraUsuario,
    LoginUsuario
}
