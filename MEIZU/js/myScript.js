
function getDate(){
    var date = new Date();
    var year = date.getFullYear();
    var mon = date.getMonth()+1;
    var day = date.getDate();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var flag = 1;
    if(h>12 && h<24){
        flag = 0;
    }
    if(h<10){
        h = "0"+h;
    }
    if(m<10){
        m = "0"+m;
    }
    if(s<10){
        s = "0"+s;
    }
    var AM_PM = flag==1?"上午":"下午";
    var time = document.getElementById("time")
    time.innerHTML = AM_PM+" "+h+":"+m+":"+s;

}

setInterval('getDate();',1000);

function countDown(){
    var date = new Date();
    var mon = date.getMonth();
    var day = date.getDate();
    var count = 365;
    var monDay = [0,31,28,31,30,31,30,31,31,30,31,30];
    var sumDay = 0;
    for(var i=0;i<=mon;i++){
        sumDay += monDay[i];
    }
    sumDay += day;
    var leftDay = count - sumDay;
    var str = "距离2019年还有"+leftDay+"天";
    alert(str);
}


function changeColor(){
    var rows = document.getElementsByClassName("rows");
    var len = rows.length;
    for(var i=0;i<rows.length;i++){
        if(i%2 == 0){
            rows[i].className += " oddRow";
        }else{
            rows[i].className += " evenRow";
        }
    }
}

changeColor();

function nTabs(thisObj,Num){
    if(thisObj.className == "active")
        return;
    var tabObj = thisObj.parentNode.id;
    var tabList = document.getElementById(tabObj).getElementsByTagName("li");
    for(var i=0; i <tabList.length; i++){
      if (i == Num){
            thisObj.className = "active"; 
            document.getElementById(tabObj+"_content"+i).style.display = "block";
          }else{
           tabList[i].className = "normal"; 
           document.getElementById(tabObj+"_content"+i).style.display = "none";
          }
    } 
}

function colorBlack(){
    var link = document.getElementsByClassName("link");
    var len = link.length;
    for(var i=0;i<len;i++){
        link[i].style.color = "black";
    }
}

function colorWhite(){
    var link = document.getElementsByClassName("link");
    var len = link.length;
    for(var i=0;i<len;i++){
        link[i].style.color = "white";
    }
}

function getMsg(){
    var input = document.getElementById("msgBox");
    var msgList = document.getElementById("msgList");
    var msg = input.value;
    var para = document.createElement("li");
    var node = document.createTextNode(msg);
    para.appendChild(node);
    msgList.appendChild(para);
    document.getElementById("msgBox").value = "";
}