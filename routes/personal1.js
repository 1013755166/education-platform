var express = require('express');
var router = express.Router();
var db =require('./db/db');
var Per_messages=require('./bean/per_messages');
// let Per_messages=require('./bean/per_messages');
// var mysql = require('mysql');
router.get('/', function (req, res, next) {
    res.render('personal1');
  });


  router.post('/',(req,res) =>{
    // var username =req.body.uesrname
    console.log(req.body.username)
    console.log(req.body.realname)
  let per_messages = new Per_messages(req.body.username,req.body.realname,req.body.sex,req.body.email,req.body.phone,req.body.wechat,req.body.metamask,req.body.school,req.body.major,req.body.culture,req.body.statement);
  console.log(per_messages.username)
  var query="insert into per_messages(`username`,`realname`,`sex`,`email`,`phone`,`wechat`,`metamask`,`school`,`major`,`culture`,`statement`)values('"+per_messages.username+"','"+per_messages.realname+"','"+per_messages.sex+"','"+per_messages.email+"','"+per_messages.phone+"','"+per_messages.wechat+"','"+per_messages.metamask+"','"+per_messages.school+"','"+per_messages.major+"','"+per_messages.culture+"','"+per_messages.statement+"')"
  db.sql(query,(err,result)=>{
      if(err){
          console.log(err)
      }else{
          res.render('personal2');
        }
      })
    });

//   //  let db=require("../db")
//    router.get('/personal1', function (request, response) {
// 	let sql="select * from per_messages";
// 	let mydata = [];
// 	db.query(sql,(err,rows)=>{
// 		if(err){
// 			response.json({err:"chucuole"})
// 		}
// 		else{
// 			for(let em of rows)
// 			{
// 				console.log(em);
// 				let record = [em['username'], em['realname'], em['sex'], em['email'], em['phone'],em['wechat'],em['metamask'],em['school'],em['major'],em['culture'],em['statement']];
// 				mydata.push(record);
// 			}
// 			console.log(mydata);
// 			response.writeHead(200, {
// 				"Content-Type": "application/json"
// 			});
// 			response.write(JSON.stringify(mydata));
// 			response.end();
// 		};
// 	});
// });
function route(handle,pathname,response,request){
	console.log("About to route a request for " + pathname);
	if(typeof handle[pathname] === 'function'){
		handle[pathname](response,request);
	}else{
		console.log("No request handler found for " + pathname);
		response.writeHead(404,{"Content-Type":"text/html"});
		response.write("404 Not found");
		response.end();
	}
}
exports.route = route;



module.exports = router;

