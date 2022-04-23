
const MonedaStore = require('../db.js');


function InsertMoneda(dato1, dato2, dato3, dato4) {
    return new Promise( (resolve, reject) => {
        const Moneda = {
            nombre: dato1,
            precio:  ,
            simbolo: ,
            imagen: 
        };
        MonedaStore.create(Moneda);
        console.log(Moneda);

        resolve(Moneda);
    });
 
}