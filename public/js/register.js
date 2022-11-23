
// //发送验证码按钮
// function abc() {
//     var time = 60;//定义60秒的倒计时
//     var Email = $('#Email').val();//获取输入框的邮箱
//     var username = $('#username').val();//获取输入的账户名
    
//     //这里我用的是ajax将用户名和邮箱发到后台
//    $.ajax({
//        type:"post",
//        url:"/register/email",
//        data:{"username":username,
//             "Email":Email
//     }
//    })
    
//     //设置一个定时，一秒执行一次
//     var mytime = setInterval(function () {
//         subs();
//     },1000)

    
//     function subs(){
//         time--;
//         $('#img').attr("value","请"+time+"秒后再试");
//         if(time===0){
//             clearInterval(mytime);
//             $('#img').attr("value","发送验证码");
//             $('#img').attr("disabled",false);//按键可用
//         } else{
//             $('#img').attr("disabled",true);//按键不可用
//         }
//     }

   
// }

// var OL_Action_Root = "http://localhost:3000";
// function Req_ajax(){           
//     console.log(111)
//     console.log($("#imagelist")[0].files)
//     // 获取file域里的图片信息
//      var formData = new FormData()
//      //创建formdata对象
//     formData.append("test",$("#imagelist")[0].files[0])  
//     // 将文件信息 append 进入formdata对象  key值 为后台 single 设置的值  
//     $.ajax({
//         url:OL_Action_Root+"/register/img",
//         type: 'POST',
//         data: formData,
//         cache: false,
//         contentType: false,
//         processData: false,
//         success: function(data){
//            if (data.err==0) {
//                console.log(data.data)
//                $('img').attr('src',data.data)
//            }
//         },
//         error: function(jqXHR, textStatus, errorThrown){
//             document.getElementById("status").innerHTML = "<span style='color:#EF0000'>连接不到服务器，请检查网络！</span>";
//         }
//     });
// }

//发送提交按钮
// $("#register").click(function(){
//     $.ajax({
//         type:"post",
//         url:"/register/zhu",
//         data:{
//         "user_name":$("#username").val(),
//         "Email":$("#Email").val(),
//         "email":$("#email").val(),
//         "user_password":$("#password").val()
//         },
//         // "repassword":$("#repassword").val()
//         success:function(data){
//             alert("success")
//         }
//     })
// })