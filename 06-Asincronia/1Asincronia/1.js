window.onload = function(){

    //Sobre el boton hago la accion
    document.querySelector("input[type='button']").addEventListener("click", function(){
        //Accedo a la seccion
        let seccion = document.querySelector("section");
        //1º Paso -> necesito 2 recuersos
        const urlApi = "https://jsonplaceholder.typicode.com/comments";

        //hago el fetch
        fetch(urlApi)
        .then(function (respuesta){
            
            //capturo respuesta
            console.log(respuesta);

            //compruebo si hay algun error
            if(!respuesta.ok){
                throw new Error("Error de fetch: " + respuesta.status);
            }

            //devuelvo el formato texto json
            return respuesta.json();
        })

        .then(function(datos){
            //capturo y gestiono los datos
            let res = "";
            for (const dato of datos) {

                res += `<p>${dato.body}</p>`;
                
            }
            //guarrada no lo hago
            seccion.innerHTML = res;
        })

        //coge el error y informa(nos coge todos los errores del codigo)
        .catch(function(error){
            alert("Problemas accediendo a la url: " + error);
        })
    }) 
}