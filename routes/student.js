var express = require('express');
var router = express.Router();
var db =require('./db/db');
let Consult=require('./bean/consult');
router.get('/', function (req, res, next) {
    res.render('student');
});

router.post('/',(req,res) =>{
  var price = req.body.price;
  var starttime = req.body.starttime;
  var endtime = req.body.endtime;
  var classtime=req.body.classtime
  var reg =new RegExp("-","g")//删除字符串里所有的“-”
  var starttime1 =starttime.replace(reg,"")
  var starttime2 = parseInt(starttime1)
  var endtime1 =endtime.replace(reg,"")
  var endtime2=parseInt(endtime1)
  var classtime1 =classtime.replace(reg,"")
  var classtime2=parseInt(classtime1)
  //授课时间不能为空、授课底价不能为空、截止时间不能为空、竞拍开始时间不能为空
  if(starttime=='' || price=='' || endtime==''||classtime==''){

  }else if(starttime2>endtime2 ||starttime2>classtime2 ||endtime2>classtime2){
    
  }else{
    // 获取前端传递的参数,放入对象
    let consult = new Consult(req.body.grade,req.body.subject,req.body.starttime,req.body.price,req.body.metamask,req.body.username,req.body.way,req.body.classtime);
    console.log(consult)
    var query="insert into consult(`grade`,`subject`,`starttime`,`price`,`endtime`,`metamask`,`username`,`way`,`classtime`)values('"+consult.grade+"','"+consult.subject+"','"+consult.starttime+"','"+consult.price+"','"+endtime2+"','"+consult.metamask+"','"+consult.username+"','"+consult.way+"','"+consult.classtime+"')"
    db.sql(query,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.render('teacherschoose');
        }
    })
  }
}
);

module.exports = router;
