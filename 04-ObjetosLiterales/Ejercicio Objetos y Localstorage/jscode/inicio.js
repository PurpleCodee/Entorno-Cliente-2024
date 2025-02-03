
window.onload = function () {

    //----------------⬆️⬆️MUY IMPORTANTE A LO PRIMERO QUE ACCEDO ARRIBA⬆️⬆️------------
    let section = document.querySelector("section");
    section.setAttribute("id", "seccionLibros");

    // Asignar un id a los elementos que lo necesitan
    let h1 = document.querySelector("h1");
    h1.setAttribute("id", "tituloLibros");

    //✨---------------RECUPERO EL NUEVO LIBRO--------------✨
    let nuevoLibro = localStorage.getItem("libroInsertado");

    //Recupero la lista original de libros desde libros.js 
    let libros;
    if (library) {
        libros = library;
    } else {
        libros = [];
    }


    //compruebo que el nuevoLibro existe
    if (nuevoLibro) {
        //cuando recupero datos debo de volver a parsear a un JSON --> objetos📋
        nuevoLibro = JSON.parse(nuevoLibro);

        //Añado el nuevo libro a la lista
        libros.push(nuevoLibro);

        //Elimino el localStorage
        localStorage.removeItem("libroInsertado");

    }


    //------------FUNCIONES PROPIAR -CREAR ELEMENTO------------
    function CrearElemento(libro, papa) {


        // Crear el artículo con la clase 'presentacion'
        let article = document.createElement("article");

        //de esta manera añado una clase al elemento
        article.classList.add("presentacion");

        // Crear el h3 con el título del libro
        let h3 = document.createElement("h3");
        h3.textContent = libro.title;

        // Crear la imagen
        let img = document.createElement("img");
        img.src = libro.cover;

        //Este evento me sirve para recoger la info del libro al que le he echo click
        img.addEventListener("click", () => {
            guardarDatitos(libro);
        });


        // Agregar h3 e img al article
        article.appendChild(h3);
        article.appendChild(img);

        // Obtener la sección donde se agregarán los artículos
        let section = document.getElementById(papa);//papa sera la clase

        //añado el articulo a la seccion
        section.appendChild(article);

        // Actualizar el H1 con el número de libros
        let h1 = document.querySelector("h1");
        //con el .length se cuantos section hay por lo que se cuantos libros hay
        let numLibros = section.getElementsByTagName("article").length;

        //Ahora al h1 le hagrego un texto + el numero de libros que he recogido
        h1.textContent = `Número de libros: ${numLibros}`;
    }


    //Debo de recorrer el objeto libreria

    //library es un array por lo que simplemente lo debo de reocrrer con un for of
    for (let libro of libros) {
        //Con mi funcion cojo los datos del json que me interesen
        CrearElemento(libro, "seccionLibros");
    }

    //----------------EN ESTE ARCHIVO QUIERO RECOGER CIERTOS DATOS---------
    /**
     * Quiero recoger los datos necesarios para mostrarlos en mostrar.js con localStorage
     */

    // Función para guardar el libro en localStorage y redirigir a mostrar.html
    function guardarDatitos(libro) {

        let libroSeleccionado = {
            title: libro.title,
            pages: libro.pages,
            genre: libro.genre,
            synopsis: libro.synopsis,
            year: libro.year,
            ISBN: libro.ISBN,
            author: libro.author.name, // Nombre del autor
            cover: libro.cover
        };
        localStorage.setItem("libroSeleccionado", JSON.stringify(libroSeleccionado));
        window.location.href = "mostrar.html"; // Redirigir a la otra página
    }


}