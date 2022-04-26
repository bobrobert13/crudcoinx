const db = require('mongoose');
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

async function Registro(usuario) {
  const registrado = await modelUser.find()
  const user = registrado.filter(registrado => registrado.correo === usuario.correo)
  if ( user != null ) {
    const addUsuario = new modelUser(usuario);
     const saveUser = addUsuario.save();
  }else{
    return "Este Usuario ya Existe"
  }


}

// Verifico que existe y retorno sus datos como respuesta
async function login(email, pass) {
   const buscaUsuarios = await modelUser.find()
   const user = buscaUsuarios.filter(buscaUsuarios => buscaUsuarios.correo === email, buscaUsuarios.clave === pass )
   if (user !== []) {
    return user
   }
   return "Clave o Correo Invalidos"


  /* const usuarios = buscaUsuarios.filter( data =>
    data.email === email,
    data.pass === pass
    )
    if ( usuarios != null ) {
      console.log(usuarios)

      return {
        users: usuarios,
        res: true
      }
    } */
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
