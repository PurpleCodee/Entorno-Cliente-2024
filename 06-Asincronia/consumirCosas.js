document.querySelector("button").addEventListener("click", function () {
    //1º Direccion del recurso
    const textito = "textito.txt"; //es un blog de notas
    const url = "https://jsonplaceholder.typicode.com/posts"
    //Feth necesita 2 parametros y es una promesa por lo que lo gestionamos como tal
    fetch(url)
    then(function (respuesta){

        //Capuro la respuesta
        console.log(respuesta);

        //si hay algun error
        if(!respuesta.ok){
            throw new Error("Error del fetch: " + respuesta.status)

        }

        //Devuelvo el formato texto json
        return respuesta.text();
    })

    .then(function(datos){

        //capuro y gestidono los datos
        //salida.textContent = datos;
        let res="";
        for (const luis of datos) {
            res += `<h2>${luis.title}<h2>`;
            res += `<h2>${luis.body}<h2>`;
        }

        //guarrada no lo hago
        salida.innerHTML = res;
    })
    .catch (function(error){
        alert("Problemas accediendo a la url");

    })
})