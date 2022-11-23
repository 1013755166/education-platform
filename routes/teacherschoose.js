var express = require('express');
var db =require('./db/db');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('teacherschoose');
  });

//展示所有的
router.get('/show', function(req, res, next) {
    var query = 'select * from consult order by id desc';
    db.sql(query,function(err,rows,fields){
      if(err){
          console.log(err)
      }else{
        res.json(rows)
      }
      
    })
});

//查询
router.post('/chaxun',function(req,res,next){
  var content = req.body.content
  var query = 'select * from consult where grade like "%'+content+'%" or subject like "%'+content+'%"';
  db.sql(query,function(err,rows,fields){
    if(err){
        console.log(err)
    }else{
      res.json(rows)
    }
  })
  
})
  
module.exports = router;