var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');
var session = require('express-session');
var bodyParser = require("body-parser");
var cors=require('cors')



var indexRouter = require('./routes/index');//精选
var loginRouter = require('./routes/login');//登录
var registerRouter = require('./routes/register');//注册
var studentRouter = require('./routes/student');//学生征课
var acution1Router = require('./routes/acution1');//课程竞拍
var changepswRouter = require('./routes/changepsw');//修改密码

var noticeRouter = require('./routes/notice');//通知公告
var notice1Router = require('./routes/notice1');
var notice2Router = require('./routes/notice2');
var notice3Router = require('./routes/notice3');
var notice4Router = require('./routes/notice4');
var notice5Router = require('./routes/notice5');
// var metamaskRouter = require('./routes/metamask');//metamask账号
// var allRouter = require('./routes/all');//所有发的征课信息
var teacherschooseRouter = require('./routes/teacherschoose');//老师选课
var teacherRouter = require('./routes/teacher');//老师征课

var zlkRouter = require('./routes/zlk');//资料库
var askRouter = require('./routes/ask');//咨询帮助
var answerRouter = require('./routes/answer');//咨询解答
// var emergencyRouter = require('./routes/emergency');紧急联系人
var faqRouter = require('./routes/faq');//常见问题
var enlistmentRouter = require('./routes/enlistment');//征课信息
var mustknowRouter = require('./routes/mustknow');//上课须知
var myaskRouter = require('./routes/myask');//我的提问
var informationRouter = require('./routes/information');//信息总结
var studentschooseRouter = require('./routes/studentschoose');//学生选课
var questionRouter = require('./routes/question');//我要提问
var materialRouter = require('./routes/material');//资料下载
var personalRouter = require('./routes/personal');//个人信息
var personal1Router = require('./routes/personal1');//录入信息第一个也页面
var personal2Router = require('./routes/personal2');


var app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// view engine setup
app.engine(".html",ejs.__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//数据模型、路由配置
app.listen(80, () => console.log("服务器开启"))

app.use('/index', indexRouter);
app.use('/', loginRouter);
app.use('/register', registerRouter);
app.use('/student', studentRouter);
app.use('/notice', noticeRouter);
app.use('/notice1', notice1Router);
app.use('/notice2', notice2Router);
app.use('/notice3', notice3Router);
app.use('/notice4', notice4Router);
app.use('/notice5', notice5Router);
app.use('/zlk', zlkRouter);
app.use('/ask', askRouter);
app.use('/answer', answerRouter);
// app.use('/emergency', emergencyRouter);
app.use('/faq', faqRouter);

// app.use('/account', accountRouter);
app.use('/enlistment', enlistmentRouter);
app.use('/mustknow', mustknowRouter);
app.use('/myask', myaskRouter);
app.use('/information', informationRouter);
app.use('/studentschoose', studentschooseRouter);
app.use('/question', questionRouter);
app.use('/material', materialRouter);
app.use('/personal', personalRouter);
app.use('/personal1', personal1Router);
app.use('/personal2', personal2Router);
// app.use('/metamask', metamaskRouter);
// app.use('/all', allRouter);
app.use('/teacherschoose', teacherschooseRouter);
app.use('/teacher', teacherRouter);
app.use('/changepsw', changepswRouter);
app.use('/acution1',acution1Router);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
