console.log('Loaded!');
alert("hello i m the javascript");
var element =document.getElementById('main_heading');
element.innerHTML="this is a client side javascript example so go through it"

var image=document.getElementById('madi');

var marginLeft=0;
function moveRight(){
    marginleft=marginleft+10;
    madi.style.marginLeft=marginLeft+'px';
}
madi.onclick=function(){
 var interval=setInterval(moveRight,100);
};

