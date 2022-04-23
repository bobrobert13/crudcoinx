const db = require('mongoose');
const model = require('./schema.js');

const {
  DB_USER,
  DB_pass,
  DB_NAME
} = process.env

db.Promise = global.Promise;

const connect = db.connect(`mongodb+srv://${DB_USER}:${DB_pass}@cluster0.8jtxe.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`).then( () => {
console.log("Base de Datos CrudCoinx Atlas Conectada");
} ).catch( e => console.log("Falla al Conectar") )

function insertarMoneda(moneda) {
        const addmoneda = new model(moneda);
        addmoneda.save();
        return console.log("Moneda Creada")
}

async function listarMonedas() {
   // const lista_monedas = []
    const lista_monedas = await model.find();
    console.log(lista_monedas)
}

async function editarMoneda(id, nombre, precio, simbolo, imagen) 
{
  let default_precio;
  if (!precio || precio == null && !nombre || nombre == null && !simbolo || simbolo == null && !imagen || imagen == null && !id || id == null ) {
   console.log("En edicion existen algunos datos nulos")
   return
  }
        const buscarMoneda = await model.findOne({_id:id});
        buscarMoneda.nombre = nombre;
        buscarMoneda.precio = precio;
        buscarMoneda.simbolo = simbolo;
        buscarMoneda.imagen = imagen;
        const monedaEditada = await buscarMoneda.save();
        return monedaEditada;
}

async function BorrarMoneda(id) {
  return model.deleteOne({_id : id});
}

//crud export funciiones a controller Moneda
module.exports = {
    create: insertarMoneda,
    read: listarMonedas,
    update: editarMoneda,
    delete: BorrarMoneda,
};