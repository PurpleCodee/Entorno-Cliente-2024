window.onload = function () {

    //Sobre el boton hago la accion
    document.querySelector("input[type='button']").addEventListener("click", function () {
        //Accedo al div para guardar ai la imagen
        let divImagen = document.getElementById("contenedor");

        //1º Necesito la url de la api
        const urlApi = "https://dog.ceo/api/breeds/image/random";

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
                // Limpio el contenido previo del div
                divImagen.innerHTML = "";

                // Creo el elemento de la img
                let img = document.createElement("img");
                
                // Asigno la URL de la imagen al atributo src
                img.src = datos.message;

                // Añado la imagen al div
                divImagen.appendChild(img);
            })
            //coge el error y informa(nos coge todos los errores del codigo)
            .catch(function (error) {
                alert("Problemas accediendo a la url: " + error);
            })
    })
}