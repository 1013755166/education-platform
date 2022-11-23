function studentschoose(){
    $.ajax({
        type:"get",
        url:"/studentschoose/show",
        success:function(data){
            console.log(data)
            var studentschoose = data
            document.getElementById("studentschoose").innerHTML = studentschoose.map ( i=>
                `
                <li class="notice-list">
                <table border="0" style="width:100%">
                    <tr>
                        
                        <th>
                            <b class="list-tit">${i.te_subject}</b>
                            <p class="list-txt">授课老师:${i.username}</p>
                            <p class="list-txt">授课年级:${i.te_grade}</p>
                            <p class="list-txt">授课价格:${i.te_price}元/时</p>
                            <p class="list-txt">合约账号:${i.te_way}</p>
                            <a class="right" href="/acution1" style="color:aliceblue;">竞拍</a>
                    </div>
                        </th>
                </table>
                <HR style="border:1 dashed #210c64" width="100%" color=#987cb9 SIZE=1>
            </li>
                `
                )
        }
    })
    
}
studentschoose()
$("#su").click(function(){
    $.ajax({
        type:"post",
        url:"/studentschoose/chaxun",
        data:{"content":$("#content").val()},
        success:function(studentschoose){
            $("#studentschoose").empty();
            document.getElementById("studentschoose").innerHTML = studentschoose.map ( i=>
                `
                <li class="notice-list">
                <table border="0">
                    <tr>
                        
                        <th>
                            <b class="list-tit">${i.te_subject}</b>
                            <p class="list-txt">授课老师:${i.username}</p>
                            <p class="list-txt">授课年级:${i.te_grade}</p>
                            <p class="list-txt">授课价格:${i.te_price}元/时</p>
                            <p class="list-txt">合约账号:${i.way}</p>
                            <a class="right" href="/acution1" style="color:aliceblue;">竞拍</a>
                    </div>
                        </th>
                </table>
                <HR style="border:1 dashed #210c64" width="100%" color=#987cb9 SIZE=1>
            </li>
                `
                )
        }
    })
})