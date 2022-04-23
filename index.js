const express = require("express");
const bodyparser = require("body-parser");
const route = require("./net/route");

const app = express();
app.use(bodyparser.json());

route(app);

app.listen(3000, function(){ console.log("COIN CONNECT") } );