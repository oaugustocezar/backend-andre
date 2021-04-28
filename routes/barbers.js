var Data = require('../model/db');
var express = require('express');

var router = express.Router();



router.get('/', async function(req, res, next) {
  let barbers = await Data.getBarbers();
  res.json(barbers);  
});

router.post('/', async function(req,res,next){
  
    let barber = await Data.insertBarber(req.body.name, req.body.star);
    res.status(200).json({"Mensagem":"Inserido com sucesso"});



});



module.exports = router;