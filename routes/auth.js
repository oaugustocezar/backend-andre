var Data = require('../model/db');
var express = require('express');
const { ReplSet } = require('mongodb');
var router = express.Router();



router.post('/login', async function(req, res, next) {

    let find = await Data.findUser(req.body.email, req.body.password); 
    if(find){
        return res.status(200).json(login);

    }else{
        return res.status(404).json({"error":"senha ou email incorretas"});
    }

   /* try{
        
        let login = await Data.findUser(req.body.email, req.body.password);
        console.log(login);
        return res.json(login);
    }catch{

        return res.status(404).json({"data":{"mensagem":"senha ou email incorretas"}});

    }   */
  
});

module.exports = router;