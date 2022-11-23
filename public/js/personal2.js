function load(){
    $.ajax({
        type:"get",
        url:"/personal2/show",
        success:function(data){
            console.log(data);
            var personal2 = data
            document.getElementById("personal2").innerHTML = personal2.map( i=>
                `
                <li>
                    <span class="book-tit">用户名</span>
                    <input type="text" name="username" id="username" value="${i.username}" />
                </li>
                <li>
                    <span class="book-tit">姓名</span>
                    <input type="text" id="realname" name="realname" value="${i.realname}" />
                </li>
                <li>
                    <span class="book-tit">性别</span>
                    <input type="text" value="${i.sex}">
                </li>
                <li>
                    <span class="book-tit">邮箱</span>
                    <input type="text" id="email" name="email" value="${i.email}" />
                </li>
                <li>
                    <span class="book-tit">个人手机</span>
                    <input type="text" id="phone" name="phone" value="${i.phone}" />
                </li>
                <li>
                    <span class="book-tit">微信</span>
                    <input type="text" id="wechat" name="wechat" value="${i.wechat}" />
                </li>
                <li>
                    <span class="book-tit">metamask</span>
                    <input type="text" id="metamask" name="metamask" value="${i.metamask}" />
                </li>
                <li>
                    <span class="book-tit">毕业学校</span>
                    <input type="text" id="school" name="school" value="${i.school}" />
                </li>
                <li>
                    <span class="book-tit">所学专业</span>
                    <input type="text" id="major" name="major" value="${i.major}" />
                </li>
                <li>
                    <span class="book-tit">学历</span>
                    <input type="text" value="${i.culture}">
                </li>
                <li>
                    <span class="book-tit">个人陈述</span>
                    <input type="text" id="statement" name="statement" value="${i.statement}" />
                </li>
                `)
        }
    })
}
load()