
function validation(){
  
  // all inputs elements
  var firstinput = document.getElementById('firstname').value;
  var lastinput = document.getElementById('lastname').value;
  var birthtinput = document.getElementById('birthday').value;
  var emailtinput = document.getElementById('email').value;
  var numberinput = document.getElementById('number').value;
  var subjectinput = document.getElementById('subject').value;
  var correctinput = /^[A-Za-z]+$/;

  var f = true, s = true , b = true ,e = true, g = true, n = true, sub = true;

  // for first Name input
  if((firstinput.length <= 1) || (firstinput.length > 25))
  {
      document.getElementById('firstn').innerHTML = "*The Length Between 1 to 25.";
       f= false
  
  }
  
  if(!isNaN(firstinput)){

      document.getElementById('firstn').innerHTML = "*Only Character is Allowed";
      
      f = false;
  
  }
  if(!firstinput.match(correctinput)){
      document.getElementById('firstn').innerHTML = "*Only Character is Allowed";
    
      f = false;
  
  }
  if(firstinput == ""){
  
    document.getElementById('firstn').innerHTML = "*Please Field the First Name";
     f= false;
}
if(f){
  
  document.getElementById('firstn').innerHTML = "";
}
  
  // for last Name input
  
  if((lastinput.length <= 1) || (lastinput.length > 25))
  {
      document.getElementById('lastn').innerHTML = "*The Length Between 1 to 25.";
   
      s = false;
  
  }
  if(!isNaN(lastinput)){
  
  
      document.getElementById('lastn').innerHTML = "*Only Character is Allowed";
     
      s = false;
  
  }
 if(!lastinput.match(correctinput)){
      document.getElementById('lastn').innerHTML = "*Only Character is Allowed";
     
      s = false;
  
  }
 if(lastinput == ""){
  
    document.getElementById('lastn').innerHTML = "*Please Field the Last Name";
    
    s = false;
}
if(s){
  
  document.getElementById('lastn').innerHTML = "";
}

  
  
  // for birthday Input
  if(birthtinput == ""){
  
      document.getElementById('birthdayn').innerHTML = "*Please Field the Birhtdate";
      b = false;
      
  }if(b){
  
    document.getElementById('birthdayn').innerHTML = "";
  }
  
  // for gender input
  
  var valid = false;
   var x = document.myform.check;
  
   for(var i=0;i < x.length; i++)
   {
      if(x[i].checked){
          valid = true;
          break;
      }
   }
   if(!valid)
   {
      document.getElementById('gendern').innerHTML = "&#160 &#160*Gender is Required";
   
      g = false
  
   }if(g){
  
    document.getElementById('gendern').innerHTML = "";
  }
  
  // for email input

  if(emailtinput.indexOf('@') <= 0)
  {
  
      document.getElementById('emailn').innerHTML = "* '@' Invalid Position";
     
      e = false;
  }
 if((emailtinput.charAt(emailtinput.length - 4)!= '.')  && (emailtinput.charAt(emailtinput.length - 3)!= '.')  ) 
  {
      document.getElementById('emailn').innerHTML = "*Invalid Syntax";
      
    e = false;
  }
if(emailtinput == ""){
  
    document.getElementById('emailn').innerHTML = "*Email id is Required";
    
    e = false;
}
if(e){
  
  document.getElementById('emailn').innerHTML = "";
}
  
  
  // for number input

  if(isNaN(numberinput)){
  
  
      document.getElementById('numbern').innerHTML = "*Only Number is Allowed";
      // return false;
      n = false;
  
  }
  if(numberinput.length != 10){
  
      document.getElementById('numbern').innerHTML = "*Please Enter 10 Digit Number";
      // return false;
      n= false;
  }
 if(numberinput == ""){
  
    document.getElementById('numbern').innerHTML = "*Phone Number is Required";
    // return false;
    n= false;
}
if(n){
   
  document.getElementById('numbern').innerHTML = "";
}
  
  
  // for subject input
  if(subjectinput == ""){
  
      document.getElementById('subjectn').innerHTML = "*Choose one Subject";
      
      sub = false;
  }if(sub){
  
  document.getElementById('subjectn').innerHTML = "";
}


  if((f == false) || (s == false) || (e == false) || (sub == false) || (n== false) || (b == false) || (g== false) )
  {
      return false;
  
  }
  }

  function onlyOne(checkbox) {
      var checkboxes = document.getElementsByName('check')
      checkboxes.forEach((item) => {
          if (item !== checkbox) item.checked = false
      })
  }
  
  
  