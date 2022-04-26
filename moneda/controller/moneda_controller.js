
const MonedaStore = require('../model/db.js');

function InsertMoneda(nombre, simbolo, precio, descripcion, imagen) {
    return new Promise( (resolve, reject) => {
      //Hacer Validacion
        const Moneda = {
            nombre: nombre,
            precio: simbolo ,
            simbolo: precio,
            descripcion: descripcion,
            imagen: imagen
        };
        MonedaStore.create(Moneda)
        resolve(Moneda);
    });
}

function listar_monedas() {
    return new Promise( (resolve, reject) => {
        resolve(MonedaStore.read())
    });
}

function borrar_moneda(id) {
    return new Promise( async (resolve, reject) => {
        if (!id) {
            console.log("No hay nada que Borrar")
            reject("No hay ninguna ID con el Elemento")
            return false
        }
      const borrar = await MonedaStore.delete(id)
      resolve(borrar)
    });

}

function editar_moneda(id, nombre, precio, simbolo, imagen ) {
    return new Promise( async (resolve, reject) => {
        if (!id) {
            console.log("No hay nada que Borrar")
            reject("No hay ninguna ID con el Elemento")
        }

      const editar = await MonedaStore.update(id, nombre, precio, simbolo, imagen)
      resolve(editar)
    });
}



module.exports = {
    InsertMoneda,
    listar_monedas,
    borrar_moneda,
    editar_moneda

}
