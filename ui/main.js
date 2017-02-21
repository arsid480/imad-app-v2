console.log('Loaded!');

var element =document.getElementById('main_heading');


var image=document.getElementById('madi');

var marginLeft;
marginLeft=0;
function moveRight(){
    marginleft=marginleft + 1;
    image.style.marginLeft=marginLeft + 'px';
}
image.onclick=function(){
    alert("dont click on me")
 var interval=setInterval(moveRight,50);
};

