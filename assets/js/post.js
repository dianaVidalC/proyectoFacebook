window.addEventListener('load',function() {
var publicar=document.getElementById("publicar");

  publicar.addEventListener("click",function(e){
    e.preventDefault();
    var publicacion= document.getElementById("texto");
    var Post=new Object();

      if(publicacion.value===""){
        document.getElementById("publicacion-vacia").innerHTML="* debe publicar algo";
        publicacion.focus();
        return false;
        }else{
          document.getElementById("publicacion-vacia").innerHTML="";
        }
      if(publicacion.value!="" && document.getElementById("dropdown").value==="amigos"){
        Post.posteoAmigos=publicacion.value;
        var contenido = document.getElementById("posteo");
	       var divPost = document.createElement("div");
         var a1Post=document.createElement("a");
         var a2Post=document.createElement("a");
         var editar=document.createTextNode("Editar")
         var eliminar=document.createTextNode("Eliminar")
	        divPost.classList.add("posteo");
          a1Post.classList.add("a1");
          a2Post.classList.add("a2");
          a1Post.setAttribute("href","#");
          a2Post.setAttribute("href","#");
          a1Post.setAttribute("id","editar");
          a2Post.setAttribute("id","eliminar");
          divPost.innerHTML =Post.posteoAmigos;
          a1Post.appendChild(editar);
          a2Post.appendChild(eliminar);
          divPost.appendChild(a1Post);
          divPost.appendChild(a2Post);
          contenido.appendChild(divPost);
	       }else if (publicacion.value!="" && document.getElementById("dropdown").value==="publico") {
           Post.posteoPublico=publicacion.value;
           var contenido = document.getElementById("posteo");
           var divPost = document.createElement("div");
           var a1Post=document.createElement("a");
           var a2Post=document.createElement("a");
           var editar=document.createTextNode("Editar")
           var eliminar=document.createTextNode("Eliminar")
           divPost.classList.add("posteo");
           divPost.setAttribute("id","muro");
           a1Post.classList.add("a1");
           a2Post.classList.add("a2");
           a1Post.setAttribute("href","#");
           a2Post.setAttribute("href","#");
           a1Post.setAttribute("id","editar");
           a2Post.setAttribute("id","eliminar");
           divPost.innerHTML =Post.posteoAmigos;
           a1Post.appendChild(editar);
           a2Post.appendChild(eliminar);
           divPost.appendChild(a1Post);
           divPost.appendChild(a2Post);
           contenido.appendChild(divPost);

	        }
      document.getElementById("texto").value="";


        var eliminarPost=document.getElementsByClassName("a2");
        for(var i=0;eliminarPost.length;i++){
          eliminarPost[i].addEventListener("click",function(e){
          e.preventDefault();
            var eliminado=document.getElementsByClassName("posteo");
              for(var j=0;eliminado.length;j++){
                eliminado[j].parentNode.removeChild(eliminado[j]);
          }

        });
      }
      });
    });
