var Data = require('../model/db');
var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', async function(req, res, next) {

  let users = await Data.select();
  res.json(users);
  
});

router.post('/', async function(req,res,next){

  let users = await Data.insertUser(req.body.name, req.body.email, req.body.password);
  res.status(200).json({"data":{"mensagem" :"ususario inserido com sucesso"},"token":"4567813"});
  

});

module.exports = router;
