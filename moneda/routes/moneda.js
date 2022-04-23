const express = require("express");
const router = express.Router();
const res = require('../../net/res')

router.get('/', (req, res) =>{
    res.send("<h1>MONEDA</h1> ")
})

router.post('/', (req, res) =>{
    res.send()
})

router.put('/', (req, res) =>{
   
})

router.delete('/', (req, res) =>{
    
})


module.exports = router;