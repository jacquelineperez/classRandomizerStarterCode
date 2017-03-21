$(document).ready(function(){
    $("#studentButton").click(function(){
         var random= Math.floor( Math.random()* studentDisplay.length);
      $("#studentDisplay").html(studentDisplay[random]); 
    });
    
    var studentDisplay=[
        "isabela",
        "anahi",
        "gabi",
     ]
   ;
       

       

    $("#teacherButton").click(function(){
      $("#teacherDisplay").html(teacherDisplay[random1]); 
    });
    var teacherDisplay=[
        "michael",
        "nick",
     ];
   var random1= Math.floor( Math.random()* teacherDisplay.length);
console.log(teacherDisplay[random1]);
    });
  
  
  
  
  
 