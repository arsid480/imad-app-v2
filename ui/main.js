/*var button=document.getElementById('counter');
button.onclick=function(){
    //Make a request to the counter endpoint
     var request=new XMLHttpRequest();
     
     //capture the response and store in  a variable
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
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

var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    //Make a request to the counter endpoint
     var request=new XMLHttpRequest();
     
     //capture the response and store in  a variable
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            //take some action
            if(request.status===200){
               var names=request.responseText;
               names=JSON.parse(names);
                var list='';
                for(var i=0;i<names.length;i++){
                    list+='<li>'+names[i]+'</li>';
                }
                var ul=document.getElementById('namelist');
                ul.innerHTML=list;
                
                
            }
        }
        //Not yet done
    };*/
    
  var submit=document.getElementById('poiu_butn');
submit.onclick=function() {
    //Make a request to the counter endpoint
     var request=new XMLHttpRequest();
     
     //capture the response and store in  a variable
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            //take some action
            if(request.status===200){
                console.log('user succesfully logged in');
                alert('user succesfully logged in');
            }
            else if(request.status===403){
                alert('username or password is incorrect');
                
            }else if(request.status===500){
                alert('something went wrong');
                
            }
        }
    }

    
    
    var nameInput=document.getElementById('name');
    
    var username=document.getElementById('username'),value;
    var password=document.getElementById('password').value;
    console.log(username);
    console.log(password);
  //make the request
  request.open('POST','http://arsid480.imad.hasura-app.io/login',true);
  request.setRequestHeader('Content-Type','application/json');
  request.send(JSON.stringify({username: username, password: password}));
    
    
};