require('dotenv').config()
const serveStatic = require('serve-static')
const history = require('connect-history-api-fallback')
const express = require("express");
const bodyParser = require('body-parser');
const route = require("./net/route");
const cors = require("cors")
const app = express();


const CoinServer = {
    origin: '*',
    optionSuccessStatus: 200

}

app.use( cors(CoinServer) )
/*
app.get('/', (req, res) => {
    res.json({
        conexion: "Activated",
        status: "Online"
    })
})
*/

app.use(history())
app.use(serveStatic(__dirname + '/dist/spa'))

app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.text());

route(app);

app.listen(process.env.PORT || 5000, function(){ console.log("NODE SERVER START") } );
