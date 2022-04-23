require('dotenv').config()
const express = require("express");
const bodyParser = require('body-parser');
const route = require("./net/route");
const app = express();

const port = 3000 || process.env.DB_port

app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.text());

route(app);

app.listen(port, function(){ console.log("NODE SERVER START") } );