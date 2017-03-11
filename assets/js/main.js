window.addEventListener('load',function() {
  var login=document.getElementById("login");

  login.addEventListener("click",function(e){
      e.preventDefault();
      var email= document.getElementById("imput-email");
      var password= document.getElementById("imput-password");
      var valEmail=/\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/;

      if(email.value==""){
        document.getElementById("email-error").innerHTML="El campo de usuario no puede estar en blanco";
        email.focus();
        return false;
      }else{
        if (email.value.search(valEmail)===false) {
          document.getElementById("email-error").innerHTML="Escriba un correo válido";
          email.focus();
          return false;
        }else{
          document.getElementById("email-error").innerHTML="";
        }
      }
      if(password.value.length===0){
        document.getElementById("password-error").innerHTML="El campo del password no puede estar en blanco";
        password.focus();
        return  false;
      }else{
        document.getElementById("password-error").innerHTML="";
      }
    });
 });
