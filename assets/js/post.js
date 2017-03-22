window.addEventListener('load',function() {
var publicar=document.getElementById("publicar");
var Post=new Object();

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
  if(publicacion.value!=""){
    Post.mensaje=publicacion.value;
    document.getElementById("post").innerHTML=publicacion.value;
  }

});
});
