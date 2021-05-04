var Data = require('../model/db');
var express = require('express');

var router = express.Router();



router.get('/', async function(req, res, next) {
  try{
    let barbers = await Data.getBarbers();
    res.json(barbers);  

  }catch(error){
    res.json({"error":error});    

  }
  
});

router.post('/', async function(req,res,next){
  
    try{
      let barber = await Data.insertBarber(req.body.name, req.body.star);
      res.status(200).json({"Mensagem":"Inserido com sucesso"});
    }catch{
      res.json({"error":"não foi possivel inserir"});
    }



});



module.exports = router;