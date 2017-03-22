window.addEventListener('load',function() {
  var login=document.getElementById("login");
  var usuariosValidos=[{email:"diann852@gmail.com",password:"laboratoria2017"},
                       {email:"erikavidal@gmail.com",password:"Laboratoria"},
                       {email:"carlavargas@hotmail.com",password:"laboratoria2016"}];

  login.addEventListener("click",function(e){
      e.preventDefault();
      var email= document.getElementById("imput-email");
      var password= document.getElementById("imput-password");
      var validacionEmail=/\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/;

      if(email.value=="" && password.value==""){
        document.getElementById("email-error").innerHTML="*El campo de usuario no puede estar en blanco";
        document.getElementById("password-error").innerHTML="*El campo del password no puede estar en blanco";
        return false;
      }
      if (email.value=="" && password.value.length!=0) {
        document.getElementById("email-error").innerHTML="*El campo de usuario no puede estar en blanco";
        document.getElementById("password-error").innerHTML="";
        email.focus();
        return false;
      }if(email.value!="" && email.value.search(validacionEmail)!=false && password.value.length===0) {
        document.getElementById("email-error").innerHTML="";
        document.getElementById("password-error").innerHTML="El campo del password no puede estar en blanco";
        password.focus();
        return false;
      }if(email.value!="" && password.value.length!=0){
        if(email.value.search(validacionEmail)===false){
          document.getElementById("email-error").innerHTML="*Escriba un correo válido";
          email.focus();
          return false;
        }
      }
      if(email.value!="" && email.value.search(validacionEmail)!=false && password.value.length!=0){
        for(var i in usuariosValidos){
          if(email.value===usuariosValidos[i].email && password.value===usuariosValidos[i].password){
            document.location.href="muro.html";
            return true;
          }else {
            if(email.value!=usuariosValidos[i].email){
              document.getElementById("email-error").innerHTML="*Es un usuario inválido";
              document.getElementById("password-error").innerHTML="";
              email.focus();
            }else if(email.value===usuariosValidos[i].email && password.value!=usuariosValidos[i].password){
              document.getElementById("password-error").innerHTML="*El password ingresado es incorrecto";
              document.getElementById("email-error").innerHTML="";
              password.focus();
              return false;
            }else{
              document.getElementById("email-error").innerHTML="*Es un usuario inválido";
              document.getElementById("password-error").innerHTML="El password ingresado es incorrecto";
              return false;
            }
          }
        }
      }
    });
 });
