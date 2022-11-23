var express = require('express');
var router = express.Router();
var db =require('./db/db');
var Teacher_class = require('./bean/teacher_class');

router.get('/', function (req, res, next) {
    res.render('teacher');
  });
  
  router.post('/',(req,res) =>{
    var te_price = req.body.te_price;
    var te_starttime = req.body.te_starttime;
    var te_endtime = req.body.te_endtime;
    var te_classtime=req.body.te_classtime

    var reg =new RegExp("-","g")//删除字符串里所有的“-”
    var te_starttime1 =te_starttime.replace(reg,"")
    var te_starttime2 = parseInt(te_starttime1)
    var te_endtime1 =te_endtime.replace(reg,"")
    var te_endtime2=parseInt(te_endtime1)
    var te_classtime1 =te_classtime.replace(reg,"")
    var te_classtime2=parseInt(te_classtime1)

    //授课时间不能为空、授课底价不能为空、截止时间不能为空、竞拍开始时间不能为空
    if(te_starttime=='' || te_price=='' || te_endtime==''||te_classtime==''){
  
    }else if(te_starttime2>te_endtime2 ||te_starttime2>te_classtime2 ||te_endtime2>te_classtime2){
      
    }else{
      // 获取前端传递的参数,放入对象
      let teacher_class = new Teacher_class(req.body.te_grade,req.body.te_subject,req.body.te_starttime,req.body.te_price,req.body.metamask,req.body.username,req.body.te_way,req.body.te_classtime);
      console.log(teacher_class)
      var query="insert into teacher_class(`te_grade`,`te_subject`,`te_starttime`,`te_price`,`te_endtime`,`metamask`,`username`,`te_way`,`te_classtime`)values('"+teacher_class.te_grade+"','"+teacher_class.te_subject+"','"+teacher_class.te_starttime+"','"+teacher_class.te_price+"','"+te_endtime2+"','"+teacher_class.metamask+"','"+teacher_class.username+"','"+teacher_class.te_way+"','"+teacher_class.te_classtime+"')"
      db.sql(query,(err,result)=>{
          if(err){
              console.log(err)
          }else{
              res.render('studentschoose');
          }
      })
    }
  }
  );
module.exports = router;
