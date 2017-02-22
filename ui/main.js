var button=document.getElementById('counter');
button.onclick=function(){
    //Make a request to the counter endpoint
     var request=new XMLHttpRequest();
     
     //capture the response and store in  a variable
    request.onreadystatechange=function(){
        if(request.readyState===XMLRequest.DONE){
            //take some action
            if(request.status===200){
                var counter =request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
                
            }
        }
        //Not yet done
    };
    
  //make the request
  request.open('GET','http://arsid480.imad.hasura-app.io/counter',true);
  request.send(null);
   
};
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    //make the request to the server and send the name
    
    //capture the list of name and render as a list
    var names=['name1','name2','name3','name4'];
    var list='';
    for(var i=0;i<names.length;i++){
        list+='<li>'+name[i]+'</li>';
    }
    var ul=document.getElementById("namelist");
    ul.innerHTML=list;
    
    
};