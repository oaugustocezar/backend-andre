var Data = require('../model/db');
var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', async function(req, res, next) {

  let users = await Data.select();
  res.json(users);
  
});

router.post('/', async function(req,res,next){

  try{
    let find = await Data.findUser(req.body.email, req.body.password);
    if (find.email == req.body.email)
      res.status(404).json({"data":{"mensagem": "usuario já cadastrado"}});

  }catch{    
    
      let users = await Data.insertUser(req.body.name, req.body.email, req.body.password,req.body.token);
      res.status(200).json(users.ops[0]);
  
  }

  
  
 
  
  

});



module.exports = router;
