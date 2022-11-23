var express = require('express');
var router = express.Router();
// var mysql = require('mysql');
router.get('/', function (req, res, next) {
    res.render('acution1');
  });

  // router.get('/2', function (req, res, next) {
  //   res.render('acution2');
  // });

  // router.get('/3', function (req, res, next) {
  //   res.render('acution3');
  // });

  // router.get('/4', function (req, res, next) {
  //   res.render('acution4');
  // });

module.exports = router;
