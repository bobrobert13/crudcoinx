const db = require('mongoose');
const { buscar } = require('../../moneda/model/db.js');
const modelUser = require('./schema.js');

const {
  DB_USER,
  DB_pass,
  DB_NAME
} = process.env

db.Promise = global.Promise;

const connect = db.connect(`mongodb+srv://${DB_USER}:${DB_pass}@cluster0.8jtxe.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`).then( () => {
console.log("");
} ).catch( e => console.log("Falla al Conectar") )


async function registrados(email) {
    const buscarRegistrados = await modelUser.find({ correo: email })
    if (buscarRegistrados!== null) {
        return "Email en Uso"
    }else{
      return "Debo registrar"
    }
}
async function Registro(nombre, email, pass) {
  registrados(email)
  /*
  //const user = registrado.filter(registrado => registrado.correo === usuario.correo)
  if ( registrado != null ) {
    return "Ya Hay un Usuario Registrado con este Email "
  }else{
    const addUsuario = new modelUser(usuario);
    const saveUser = addUsuario.save();
  }
*/

}

// Verifico que existe y retorno sus datos como respuesta
async function login(email, pass) {
   const buscaUsuarios = await modelUser.find()
   const user = buscaUsuarios.filter(buscaUsuarios => buscaUsuarios.correo === email, buscaUsuarios.clave === pass )
   if (user !== []) {
    return user
   }
   return "Clave o Correo Invalidos"
}

async function usuarios(){
  const users = modelUser.find()
  return users
}


module.exports = {
    crear: Registro,
    entrar:login,
    registrado: usuarios
};
