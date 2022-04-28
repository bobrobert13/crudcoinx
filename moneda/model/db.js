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
}

async function listarMonedas(one) {
    let oneMoneda = {}
    if (one != null ) {
      oneMoneda = {
        nombre: one
      }
    }
    const lista_monedas = await model.find(oneMoneda);
    return lista_monedas
}

async function buscarMoneda(nombre) {
  const buscarMoneda = await model.find({nombre:nombre})
 // const moneda = buscarMoneda.filter(buscarMoneda => buscarMoneda.nombre === nombre )
  if (buscarMoneda !== ['']) {
   return buscarMoneda
  }
  return "Moneda no Encontrada"
}

async function editarMoneda(id, nombre, precio, simbolo, descripcion, imagen)
{
        const buscarMoneda = await model.findOne({_id:id});
        buscarMoneda.nombre = nombre;
        buscarMoneda.precio = precio;
        buscarMoneda.simbolo = simbolo;
        buscarMoneda.descripcion = descripcion;
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
    buscar: buscarMoneda
};
