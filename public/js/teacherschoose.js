function load(){
    $.ajax({
        type:"get",
        url:"/teacherschoose/show",
        success:function(data){
            var teacherschoose = data
            document.getElementById("teacherschoose").innerHTML = teacherschoose.map ( i=>
                `<li class="notice-list">
                        <tr>
                            <th>
                                <b class="list-tit">${i.subject}</b>
                                <p class="list-txt">授课老师:${i.username}</p>
                                <p class="list-txt">授课年级:${i.grade}</p>
                                <p class="list-txt">授课价格:${i.price}元/时</p>
                                <p class="list-txt">合约账号:${i.way}</p>
                                <a class="right" href="/acution1" style="color:aliceblue;">竞拍</a>
                            </th>
                        </tr>
                <hr style="border:1 dashed #210c64" width="100%" color=#987cb9 SIZE=1>
                </li>`
                )
        }
    })
    
}
load()
$("#su").click(function(){
    $.ajax({
        type:"post",
        url:"/teacherschoose/chaxun",
        data:{"content":$("#content").val()},
        success:function(teacherschoose){
            $("#teacherschoose").empty();
            document.getElementById("teacherschoose").innerHTML = teacherschoose.map ( i=>
                `<li class="notice-list">
                        <tr>
                            <th>
                                <b class="list-tit">${i.subject}</b>
                                <p class="list-txt">授课老师:${i.username}</p>
                                <p class="list-txt">授课年级:${i.grade}</p>
                                <p class="list-txt">授课价格:${i.price}元/时</p>
                                <p class="list-txt">合约账号:${i.way}</p>
                                <a class="right" href="/acution1" style="color:aliceblue;">竞拍</a>
                            </th>
                        </tr>
                <hr style="border:1 dashed #210c64" width="100%" color=#987cb9 SIZE=1>
                </li>`
                )
        }
    })
})

