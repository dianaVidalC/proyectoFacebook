window.addEventListener('load',function() {
var publicar=document.getElementById("publicar");

publicar.addEventListener("click",function(e){
  e.preventDefault();

  var publicacion= document.getElementById("texto");

  if(publicacion.value===""){
    document.getElementById("publicacion-vacia").innerHTML="* debe publicar algo";
    publicacion.focus();
    return false;
  }else{
    document.getElementById("publicacion-vacia").innerHTML="";

  }

});
});
