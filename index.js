require('dotenv').config()
const express = require("express");
const bodyParser = require('body-parser');
const route = require("./net/route");

const app = express();


const CoinServer = {
    origin: '*',
    optionSuccessStatus: 200

}

app.use( cors(CoinServer) )

app.get('/', (req, res) => {
    res.json({
        conexion: "Activated",
        status: "Online"
    })
})

app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.text());

route(app);

app.listen(process.env.PORT || 5000, function(){ console.log("NODE SERVER START") } );
