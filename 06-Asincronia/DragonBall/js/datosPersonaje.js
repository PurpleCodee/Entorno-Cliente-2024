window.onload = function () {
    //Accedo al div para guardar ai la imagen
    let div = document.querySelector(".contenedor");
    let section = document.querySelector("section");
    

    //Optengo la ide del personaje desde la url
    const urlParams = new URLSearchParams(window.location.search);
    const personajeId = urlParams.get("id"); // Obtener el id desde la URL
    //compruebo que la id existe
    if(!personajeId){
        alert("No se ha encontrado la id del personaje");
        return;

    }

    //1º Necesito la url de la api
    const urlApi = `https://dragonball-api.com/api/characters/${personajeId}`; //aqui ya tengo las transformaciones

   
    //✨---------------------FETCH PARA PERSONAJES-----------------✨
    fetch(urlApi)
        .then(function (respuesta) {

            //capturo la respuesta
            console.log(respuesta);

            //compruebo si hay algun error
            if (!respuesta.ok) {
                throw new Error("Error de fetch: " + respuesta.status);
            }

            //Devuelvo en formato json
            return respuesta.json();
        })

        .then(function (datos) {
             //Titulo
             let h1 = document.createElement("h1");
             h1.textContent = datos.name;

             div.appendChild(h1);

             //Creo el parrafo de info
             let info = document.createElement("p");
             info.className = "info-principal";
             info.textContent = datos.description;

             div.appendChild(info);

             //Creo la imagen
             let img = document.createElement("img");
             img.src = datos.image;
             div.appendChild(img);

             //Titulo del planeta
             let tituloPlaneta = document.createElement("h3");
             tituloPlaneta.textContent = "🌍 El planeta de origen";

             div.appendChild(tituloPlaneta);



             for (const personaje_key in datos) {
                if(personaje_key === "originPlanet"){
                    //Creo el titulo del planeta de origen
                    let planeta = document.createElement("h3");
                    planeta.textContent = datos.originPlanet.name;
                    div.appendChild(planeta);
                }

                if(personaje_key === "description"){
                    //Creo la descripcion del planeta de origen
                    let planetaDescripcion = document.createElement("p");
                    planetaDescripcion.className = "planeta";
                    planetaDescripcion.textContent = datos.originPlanet.description;
                    div.appendChild(planetaDescripcion);

                }

                if(personaje_key === "image"){
                    //Creo la descripcion del planeta de origen
                    let planetaImg = document.createElement("img");
                    planetaImg.src = datos.originPlanet.image;
                    div.appendChild(planetaImg);
                }

             }

             //Aqui quiero crear las transformaciones
             let tituloTransformacion = document.createElement("h3");
             tituloTransformacion.textContent = "Transformaciones";
             div.appendChild(tituloTransformacion);


             for (const transformacion of datos.transformations) {
                let aticulo = document.createElement("article");

                //Creo el nombre
                let nombreTransformacion = document.createElement("h2");
                nombreTransformacion.textContent = transformacion.name;
              

                //Creo la imagen
                let transformacionImg = document.createElement("img");
                transformacionImg.src = transformacion.image;
                

                 //maximoqui
                 let maxQi = document.createElement("p");
                 maxQi.textContent = transformacion.ki;
        
                 
                //titulo ki
                let tituloKi = document.createElement("h3");
                tituloKi.textContent = "Maximo Ki: ";
                

                aticulo.appendChild(nombreTransformacion);
                aticulo.appendChild(transformacionImg);
                aticulo.appendChild(maxQi);
                aticulo.appendChild(tituloKi);

                section.appendChild(aticulo);
                
             }

             
             
      
        })
        //coge el error y informa(nos coge todos los errores del codigo)
        .catch(function (error) {
            alert("Problemas accediendo a la url: " + error);
        })
}