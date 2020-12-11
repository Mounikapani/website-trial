
function validated(){
        var firstn=document.getElementById('fname').value;
        var lastn=document.getElementById('lname').value;
        var emails=document.getElementById('em').value;
        var pass=document.getElementById('ps').value;
        var cpass=document.getElementById('cps').value;
        if(firstn == ""){
               document.getElementById('fname').innerHTML="please enter firstname ";
               return false;
         }
         if((firstn.length <= 2) || (firstn.length>20)){
               document.getElementById('fname').innerHTML="Firsrname length must be in between 2 to 20";
               return false;
         }
         if(!isNaN(firstn)){
               document.getElementById('fname').innerHTML="please enter only characters";
               return false;
         }
         if(lastn == ""){
               document.getElementById('lname').innerHTML="please enter lastname";
               return false;
         }
         if((lastn.length <= 2) || (lastn.length>20)){
               document.getElementById('lname').innerHTML="Lastname length must be in between 2 to 20";
               return false;
         }
         if(!isNaN(lastn)){
               document.getElementById('lname').innerHTML="Please enter only characters";
               return false;
         }
        if(emails == ""){
              document.getElementById('emailids').innerHTML="please enter email address";
              return false;
        }
        if(emails.indexOf('@') <= 0){
              document.getElementById('emailids').innerHTML="email should not start with @";
              return false;
        }
        if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
              document.getElementById('emailids').innerHTML="Please enter valid email .";
              return false;
        }
        if((emails.charAt(emails.length-3)!='c') && (emails.charAt(emails.length-2)!='c')){
              document.getElementById('emailids').innerHTML="Please enter valid email .c";
              return false;
        }
        if(emails.charAt(emails.length-2)!='o'){
              document.getElementById('emailids').innerHTML="Please enter valid email .o";
              return false;
        }
        if(emails.charAt(emails.length-1)!='m'){
              document.getElementById('emailids').innerHTML="Please enter valid email .m";
              return false;
        }
        if(pass.length<=7){
              document.getElementById('password').innerHTML="Please enter valid password";
              return false;
        }
        if(cpass!==pass) {
          document.getElementById('cpassword').innerHTML="Please enter valid password";
          return false;
      }
 }
