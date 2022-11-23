var express = require('express');
var router = express.Router();
// var mysql = require('mysql');
/* GET home page. */

router.get('/', function (req, res, next) {
  console.log("ha:",req.params)
  res.render('index');
});


module.exports = router;
