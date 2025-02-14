window.onload = function () {

//-----------------------------------APARTADO A----------------------------------------

    //Sobre el boton hago la accion
    document.querySelector("input[value='Apartado A']").addEventListener("click", function () {

        //1º Necesito la url de la api
        const urlApi = "https://randomuser.me/api";

        //hago el fetch
        fetch(urlApi)
            .then(function (respuesta) {

                //campuro la respuesta
                console.log(respuesta);

                //compruebo si hay algun error
                if (!respuesta.ok) {
                    throw new Error("Error de fetch: " + respuesta.status);
                }

                //Devuelvo en formato json
                return respuesta.json();
            })

            .then(function (datos) {

                //Muestro los datos

                console.log(datos);
                    
              

               
            })
            //coge el error y informa(nos coge todos los errores del codigo)
            .catch(function (error) {
                alert("Problemas accediendo a la url: " + error);
            })
    })

    let div = document.querySelector("div");
    //Funcio
    function CrearTarjetasUsuario(usuario, div){
        //Primero creo los elementos que necesito
        let article = document.createElement("article");

        let p = document.createElement("p");
        //Añado el contenido al h3
        p.textContent = usuario.name.first;
        p.textContent += usuario.name.last + ": ";
        p.textContent += usuario.dob.age + " Años ";

        let img = document.createElement("img");
        //le asigno atributro src a la imagen
        img.src = usuario.picture.medium;

        
        //añado el articulo al padre (section)
       
        article.appendChild(p);
        article.appendChild(img);
        article.setAttribute("class","usuario")
        div.appendChild(article);
    }


//-----------------------------------APARTADO B----------------------------------------
      //Sobre el boton hago la accion
      document.querySelector("input[value='Apartado B']").addEventListener("click", function () {

        //Accedo al div del html
        let div = document.querySelector("div");

        //1º Necesito la url de la api
        const urlApi = "https://randomuser.me/api";

        //hago el fetch
        fetch(urlApi)
            .then(function (respuesta) {

                //campuro la respuesta
                console.log(respuesta);

                //compruebo si hay algun error
                if (!respuesta.ok) {
                    throw new Error("Error de fetch: " + respuesta.status);
                }

                //Devuelvo en formato json
                return respuesta.json();
            })

            
            
            .then(function (datos) {
                for (const usuario of datos.results) {
                    CrearTarjetasUsuario(usuario, div)

                }
             
            })
            //coge el error y informa(nos coge todos los errores del codigo)
            .catch(function (error) {
                alert("Problemas accediendo a la url: " + error);
            })
    })
}