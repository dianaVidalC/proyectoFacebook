window.addEventListener('load',function() {
  var publicar=document.getElementById("publicar");

  publicar.addEventListener("click",function(e){
    e.preventDefault();
    var publicacion= document.getElementById("texto");

    function Post(posteoAmigos,posteoPublico){
      this.posteoAmigos=posteoAmigos;
      this.posteoPublico=posteoPublico;
      //this.postEliminar=eliminar();
    }
    var resultado = document.getElementById('posteo');

    function crearPost(texto) {
      var post = document.createElement('div');
      var texto = document.createElement('p');
      texto.innerHTML = texto;
      var editar=document.createElement('a');
      var eliminar = document.createElement('a');
      post.classList.add("posteo");
      editar.classList.add("a1");
      eliminar.classList.add("a2");
      editar.setAttribute("href","#");
      eliminar.setAttribute("href","#");
      editar.setAttribute("id","editar");
      eliminar.setAttribute("id","eliminar");
      eliminar.innerHTML = "Eliminar"
      editar.innerHTML = "Editar"
      eliminar.addEventListener('click',function(e) {
        e.preventDefault();
        var postParent = texto.target.parent; // Devuelve el padre
        postParent.removeChild(texto);
      });
      post.appendChild(texto);
      post.appendChild(eliminar);
      post.appendChild(editar);
      return post;
    }
      if(publicacion.value===""){
        document.getElementById("publicacion-vacia").innerHTML="* debe publicar algo";
        publicacion.focus();
        return false;
        }else{
          document.getElementById("publicacion-vacia").innerHTML="";
        }
      if(publicacion.value!="" && document.getElementById("dropdown").value==="amigos"){
        Post.posteoAmigos=publicacion.value;
        resultado.appendChild(crearPost(Post.posteoAmigos));
	       }else if (publicacion.value!="" && document.getElementById("dropdown").value==="publico") {
           Post.posteoPublico=publicacion.value;
           resultado.appendChild(crearPost(Post.posteoPublico));
	        }
    //  document.getElementById("texto").value="";

      });
    });


    /*
  Esto crea la siguiente estructura
  <div>
    <p>texto pasado a la funcion</p>
    <a href="#">Eliminar</a>
  </div>
*/
