var express = require('express');
// const { DEC8_BIN } = require('mysql/lib/protocol/constants/charsets');
var router = express.Router();
var db =require('./db/db');
router.get('/', function (req, res, next) {
    res.render('personal2');
  });
  
  router.get('/show',function(req,res,next){
      var query = 'select * from per_messages where id = (SELECT MAX(id) FROM per_messages)'
        db.sql(query,function(err,rows){
            if(err){
                console.log(err);
                return;
            }
            res.json(rows)
        })
    })
module.exports = router;