const db = require('mongoose');
const model = require('./schema.js');
db.Promise = global.Promise;
db.connect('mongodb+srv:"MYCONECTIONROBERT"').then( () => {
console.log("Base de Datos Atlas Conectada");
} )

function insertarMoneda({moneda}) {
        const moneda = new model(moneda);
        mensajes.save();
}

async function listarMonedas() {
    const lista_monedas = await model.find();
    console.log(lista_monedas);
}

async function editarMoneda(id, moneda) 
{
        const buscarMoneda = await model.findOne({_id:id});
        buscarMoneda.msj = moneda;
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
    delete: BorrarMoneda 
};