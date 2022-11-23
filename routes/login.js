var express = require('express');
var path =require('path')
var router = express.Router();
var db =require('./db/db');

router.get('/',function(req,res,next){
    res.render('login')
})
router.get('/login', function (req, res, next) {
    // var input=req.query.input;
    // console.log(input)
    var username = req.query.username;
    var password = req.query.password;
    var query ="select `username`,`password`,`id` from login where `username`='"+username+"'and `password`='"+password+"'";
    db.sql(query,(err,result,fields)=>{
        var u=result[0];
        console.log(u)
        if(!u){
            res.send(`<!DOCTYPE html>
                <meta charset="UTF-8">
                <script>
                alert('密码与用户名不匹配！请重新登录！')
                window.location.href ="./"
                </script>`)
        }else{
            res.render('index')
        }
    })
});

module.exports = router;
