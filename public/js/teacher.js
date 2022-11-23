function teacherfunction(){
    var input_starttime=document.getElementById("te_starttime").value;
    var input_price=document.getElementById("te_price").value;
    var input_endtime=document.getElementById("te_endtime").value;
    var input_classtime=document.getElementById("te_classtime").value;

    let reg =new RegExp("-","g")//删除字符串里所有的“-”
    var starttime1 =input_starttime.replace(reg,"")
    var starttime2 = parseInt(starttime1)
    var endtime1 =input_endtime.replace(reg,"")
    var endtime2=parseInt(endtime1)
    var classtime1 =input_classtime.replace(reg,"")
    var classtime2=parseInt(classtime1)

    if(input_starttime=='' && input_endtime=='' &&  input_price==''&& input_classtime==''){
        document.getElementById("book-tit1").style.display="inline-block";
        document.getElementById("book-tit2").style.display="inline-block";
        document.getElementById("book-tit3").style.display="inline-block";
        document.getElementById("book-tit4").style.display="inline-block";
        document.getElementById("book-tit5").style.display="none";
        document.getElementById("book-tit6").style.display="none";
    }
    else if(input_starttime=='' && input_endtime=='' &&  input_price==''){
        document.getElementById("book-tit1").style.display="inline-block";
        document.getElementById("book-tit2").style.display="inline-block";
        document.getElementById("book-tit3").style.display="inlice-block";
        document.getElementById("book-tit4").style.display="none";
    }
    else if(input_starttime=='' && input_endtime=='' && input_classtime==''){
        document.getElementById("book-tit1").style.display="inline-block";
        document.getElementById("book-tit2").style.display="inline-block";
        document.getElementById("book-tit3").style.display="none";
        document.getElementById("book-tit4").style.display="inline-block";
    }
    else if(input_starttime=='' &&  input_price==''&& input_classtime==''){
        document.getElementById("book-tit1").style.display="inline-block";
        document.getElementById("book-tit2").style.display="none";
        document.getElementById("book-tit3").style.display="inline-block";
        document.getElementById("book-tit4").style.display="inline-block";
    }
    else if(input_endtime=='' &&  input_price==''&& input_classtime==''){
        document.getElementById("book-tit1").style.display="none";
        document.getElementById("book-tit2").style.display="inline-block";
        document.getElementById("book-tit3").style.display="inline-block";
        document.getElementById("book-tit4").style.display="inline-block";
        document.getElementById("book-tit5").style.display="none";
        document.getElementById("book-tit6").style.display="none";
    }
    else if(input_price==''&& input_classtime==''){
        document.getElementById("book-tit1").style.display="none";
        document.getElementById("book-tit2").style.display="none";
        document.getElementById("book-tit3").style.display="inline-block";
        document.getElementById("book-tit4").style.display="inline-block";
        document.getElementById("book-tit5").style.display="none";
        document.getElementById("book-tit6").style.display="none";
    }
    else if(input_endtime==''&& input_classtime==''){
        document.getElementById("book-tit1").style.display="none";
        document.getElementById("book-tit2").style.display="inline-block";
        document.getElementById("book-tit3").style.display="none";
        document.getElementById("book-tit4").style.display="inline-block";
        document.getElementById("book-tit5").style.display="none";
        document.getElementById("book-tit6").style.display="none";
    }
    else if(input_starttime==''&& input_classtime==''){
        document.getElementById("book-tit1").style.display="inline-block";
        document.getElementById("book-tit2").style.display="none";
        document.getElementById("book-tit3").style.display="none";
        document.getElementById("book-tit4").style.display="inline-block";
        document.getElementById("book-tit5").style.display="none";
        document.getElementById("book-tit6").style.display="none";
    }
    else if(input_endtime=='' &&  input_price==''){
        document.getElementById("book-tit1").style.display="none";
        document.getElementById("book-tit2").style.display="inline-block";
        document.getElementById("book-tit3").style.display="inline-block";
        document.getElementById("book-tit4").style.display="none";
        document.getElementById("book-tit5").style.display="none";
        document.getElementById("book-tit6").style.display="none";
    }
    else if(input_starttime=='' &&  input_price==''){
        document.getElementById("book-tit1").style.display="inline-block";
        document.getElementById("book-tit2").style.display="none";
        document.getElementById("book-tit3").style.display="inline-block";
        document.getElementById("book-tit4").style.display="none";
        document.getElementById("book-tit5").style.display="none";
        document.getElementById("book-tit6").style.display="none";
    }
    else if(input_starttime==''&& input_endtime==''){
        document.getElementById("book-tit1").style.display="inline-block";
        document.getElementById("book-tit2").style.display="inline-block";
        document.getElementById("book-tit3").style.display="none";
        document.getElementById("book-tit4").style.display="none";
        document.getElementById("book-tit5").style.display="none";
        document.getElementById("book-tit6").style.display="none";
    }
    else if(input_price==''){
        document.getElementById("book-tit1").style.display="none";
        document.getElementById("book-tit2").style.display="none";
        document.getElementById("book-tit3").style.display="inline-block";
        document.getElementById("book-tit4").style.display="none";
        document.getElementById("book-tit5").style.display="none";
        document.getElementById("book-tit6").style.display="none";
    }
    else if(input_endtime==''){
        document.getElementById("book-tit1").style.display="none";
        document.getElementById("book-tit2").style.display="inline-block";
        document.getElementById("book-tit3").style.display="none";
        document.getElementById("book-tit4").style.display="none";
        document.getElementById("book-tit5").style.display="none";
        document.getElementById("book-tit6").style.display="none";
    }
    else if(input_starttime==''){
        document.getElementById("book-tit1").style.display="inline-block";
        document.getElementById("book-tit2").style.display="none";
        document.getElementById("book-tit3").style.display="none";
        document.getElementById("book-tit4").style.display="none";
        document.getElementById("book-tit5").style.display="none";
        document.getElementById("book-tit6").style.display="none";
    }
    else if(input_classtime==''){
        document.getElementById("book-tit1").style.display="none";
        document.getElementById("book-tit2").style.display="none";
        document.getElementById("book-tit3").style.display="none";
        document.getElementById("book-tit4").style.display="inline-block";
        document.getElementById("book-tit5").style.display="none";
        document.getElementById("book-tit6").style.display="none";
    }
    else if(input_classtime==''&& starttime2>endtime2){
        document.getElementById("book-tit1").style.display="none";
        document.getElementById("book-tit2").style.display="none";
        document.getElementById("book-tit3").style.display="none";
        document.getElementById("book-tit4").style.display="inline-block";
        document.getElementById("book-tit5").style.display="inline-block";
        document.getElementById("book-tit6").style.display="none";
    }
}