var express = require('express');
var router = express.Router();
var db =require('./db/db');
const fs=require('fs');
const path=require('path');
//上传图片的模板
var multer=require('multer');
//生成的图片放入uploads文件夹下
// var upload=multer({dest:'public/img/upload1/'})
//图片上传必须用post方法
let User =require('./bean/user');
router.get('/', function (req, res, next) {
    res.render('register');
  });


  
//   //上传照片
//   router.post('/img',upload.single('test'),(req,res)=>{
//     //读取文件路径
//     fs.readFile(req.file.path,(err,data)=>{
//         //如果读取失败
//     if(err){return res.send('上传失败')}
//     //如果读取成功
//     //声明图片名字为时间戳和随机数拼接成的，尽量确保唯一性
//     let time=Date.now()+parseInt(Math.random()*999)+parseInt(Math.random()*2222);
//     //拓展名
//     let extname=req.file.mimetype.split('/')[1]
//     //拼接成图片名
//     let keepname=time+'.'+extname
//     //三个参数
//     //1.图片的绝对路径
//     //2.写入的内容
//     //3.回调函数
//     fs.writeFile(path.join(__dirname,'../public/img/upload1/'+keepname),data,(err)=>{
//         if(err){return res.send('写入失败')}
//         res.send({err:0,msg:'上传ok',data:'/img/upload1/'+keepname})
//     });
//  });
// })

router.post('/',(req,res) =>{
  // 获取前端传递的参数,放入对象
  let password = req.body.password;
  let repassword =req.body.repassword
  if(password!=repassword || password==''){
    res.send(`<!DOCTYPE html>
              <meta charset="UTF-8">
              <script>
              alert('输入密码与确认密码不相同！或是空的！')
              window.location.href ="./register"
              </script>`
            )
  }else{
    let user = new User(req.body.username,req.body.password,req.body.Email);
    var query1="select `username`from login where `username`='"+user.username+"'"
    var query="insert into login(`username`,`password`,`email`)values('"+user.username+"','"+user.password+"','"+user.email+"')"
    db.sql(query1,(err,result,fields)=>{
      var u=result[0];
      if(!u){
        db.sql(query,(err,result)=>{
          if(err){
              console.log(err)
          }else{
              res.redirect('/');
          }
        })
      }else{
        res.send(`<!DOCTYPE html>
              <meta charset="UTF-8">
              <script>
              alert('用户名已存在，请重新注册！')
              window.location.href ="./register"
              </script>`
            )
      }
    }) 
}
  });

const nodemailer = require('nodemailer');
router.post('/email',(req,res) =>{
    var EMAIL = req.body.Email //req为请求体对象 我使用的是post请求方式，所以通过req.body获取用户提交的邮箱
 console.log(EMAIL);
  //创建一个smtp服务器
const config = {
host: 'smtp.qq.com',
port: 465,
auth: {
   user: '3082272483@qq.com', //注册的163邮箱账号
   pass: 'mrkspykiygymdcde' //邮箱的授权码，不是注册时的密码,等你开启的stmp服务自然就会知道了
}
};
// 创建一个SMTP客户端对象
const transporter = nodemailer.createTransport(config);


console.log("success")
const randomFns=()=> { // 生成6位随机数
   let code = ""
   for(let i= 0;i<6;i++){
       code += parseInt(Math.random()*10)
   }
   return code 
}
const regEmail=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/ //验证邮箱正则
//  let EMAIL=req.body.email1 //req为请求体对象 我使用的是post请求方式，所以通过req.body获取用户提交的邮箱
if (regEmail.test(EMAIL)){  //邮箱验证通过
  let code=randomFns()
  console.log(code)
  transporter.sendMail({
    from: '3082272483@qq.com', // 发件邮箱
    to: EMAIL, // 收件列表
    subject: '验证你的电子邮件', // 标题
    html: `
    <p>你好！</p>
    <p>您正在注册飞跃教育社区账号</p>
    <p>你的验证码是：<strong style="color: #ff4e2a;">${code}</strong></p>
    <p>***该验证码5分钟内有效***</p>` // html 内容
  }, 
  function(error, data) {
    assert(!error,500,"发送验证码错误！")
    transport.close(); // 如果没用，关闭连接池
  })
  //....验证码发送后的相关工作 
}else{
    assert(false,422,'请输入正确的邮箱格式！')
}

//发送邮件
module.exports = function (mail){
  transporter.sendMail(mail, function(error, info){
     if(error) {
         return console.log(error);
     }
     console.log('mail sent:', info.response);
  });
  };
  
})


module.exports = router;


