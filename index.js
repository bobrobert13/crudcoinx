require('dotenv').config()
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
const port = 3000 || process.env.DB_port

app.get('/', (req, res) => {
    res.json({
        conexion: "Activated",
        status: "Online"
    })
})

app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.text());

route(app);

app.listen(port, function(){ console.log("NODE SERVER START") } );
