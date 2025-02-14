window.onload = function () {
  document.querySelector("input[type='button']").addEventListener("click", function () {
    const url = "http://www.jaimeweb.es/medac/datos.json";

    fetch(url)//si tengo el archivo que tiene el select quito la cabecera y dejo solo url
      .then(function (respuesta) {
        //Capturo la respuesta
        //console.log(respuesta);

        if (!respuesta.ok) {
          throw new Error("Error del Fetch: " + respuesta.status);
        }

        //DEvuelvo el formato texto o json
        return respuesta.json();
      })
      .then(function (datos) {
        //Muestro los datos estoy persisiseima quiero terminar ya :(
        for (const datitos of datos) {

          //------Primer apartado es este console log--------


          //console.log(datitos);

          //------Segundo apartado es este console log--------

        }

        for (const datitos of datos) {
          //console.log("Campo: " + datitos.id + " " + "Nombre: " + datitos.nombre + " " + "Email: " + datitos.email + " " + "Estado: " + datitos.estado);


          console.log("Campo: " + datitos.id);
          console.log("Nombre: " + datitos.nombre);
          console.log("Email: " + datitos.email);
          console.log("Estado: " + datitos.estado)
          console.log("---------------------------"); //Asi lo dejo 
        }

        //----------------------Esto lo dejo ai porque ya esta echo------------------

        //Creo los elementos

        /*
        for (const datitos of datos) {
          //Creo que quieres esto si no es asi morire

          let div = document.createElement("div");

          document.body.appendChild(div)

          let parrafo = document.createElement("p");


          parrafo.textContent = "Campo: " + datitos.id + " " + "Nombre: " + datitos.nombre + " " + "Email: " + datitos.email + " " + "Estado: " + datitos.estado;
  
          div.appendChild(parrafo);
        }*/

        

      })
      .catch(function (error) {
        alert("Problemas accediendo a la URL: " + error);
      });
  });

}

