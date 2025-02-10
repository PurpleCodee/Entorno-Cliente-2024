window.onload = function(){

    function CrearTitulo(papaId, libro){
        //Primero accedo al al secciton del div
        let papa = document.getElementById(papaId);

        let titulo = document.createElement("h2");

        //meto el h2 en el section
        titulo.textContent  = libro.title;

        //aqui pongo el texto del titulo
        papa.appendChild(titulo);

    }


    function CrearTabla(papaId , libro){
        //accedo al padre
        let papa = document.getElementById(papaId);

        //creo elemento de la tabla
        let tabla = document.createElement("table");
        tabla.setAttribute("id", "tablaId")

        //Defino los datos que va ha llevar la tabla
        let datos = [
            ["Paginas", libro.pages],
            ["Genero", libro.genre],
            ["Sinopsis",libro.synopsis],
            ["Año",libro.year],
            ["ISBN",libro.ISBN],
            ["Autor",libro.author.name]//es un objeto
        ];

        //Recorro el libro y mientras que lo hago añado filas y columnas
        for (let [key, value] of datos) {
            //Creo la fila
            let fila = document.createElement("tr");

            //creo la celda de encabezado
            let celdaEncabezado = document.createElement("th");
            celdaEncabezado.textContent = key;//el encabezado es la clave

             //Creo una celda normal
            let celda = document.createElement("td")
            celda.textContent = value;//el contenido es el valor

            // Añado la celda de encabezado a la fila
            fila.appendChild(celdaEncabezado);
            fila.appendChild(celda);

            // Añado la fila a la tabla
            tabla.appendChild(fila);
        } 

            // Añado la tabla al padre
            papa.appendChild(tabla);
    }

    function InsertarImagen(papaId, libro ){

        let papa = document.getElementById(papaId);
        //Creo el elemento que va a contener la imagen
        let img = document.createElement("img");

        //cojo el dato del libro que quiero
        img.src = libro.cover;

        papa.appendChild(img);
    }

    //------------AÑADO AL ENLAZE DE VOLVER UNA REDIRECCION----------

    let enlaceVolver = document.querySelector("a");

    enlaceVolver.addEventListener("click",()=>{
        enlaceVolver.setAttribute("href", "\inicio.html");

    });

    //------------------AQUI RECOJO LOS DATOS QUE NECESITO DE INICIO.JS-------------
    let libro = localStorage.getItem("libroSeleccionado");

    //Compuebo si el libro existe
    if(libro){
        libro = JSON.parse(libro);//debo parsear para convertir el string en un objeto

        //Llamo a mi funcion que poner el titulo
        CrearTitulo("info", libro);
        
        //llamo a mi funcio para insertar los datos en la tabla y crearla
        CrearTabla("info" , libro);

        //llamo a la funcion para añadir la iagen
        InsertarImagen("info", libro);


    } else {
        document.getElementById("info").textContent = "No hay libro seleccionado.";
    }
}