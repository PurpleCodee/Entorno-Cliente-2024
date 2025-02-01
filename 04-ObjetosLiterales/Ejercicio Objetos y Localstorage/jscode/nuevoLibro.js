window.onload = function () {
    //-------------RECOJO LOS ELEMENOS COMO DE NORMAL EN UN FORMULARIO------------
    let formu = document.querySelector("form");

    let titulo = formu.querySelector("input[name='titulo']");
    let ISBN = formu.querySelector("input[name='isbn']");
    let paginas = formu.querySelector("input[name='numpaginas']");
    let genero = formu.querySelector("select[name='genero']");
    let anio = formu.querySelector("input[name='anio']");
    let portada = formu.querySelector("input[name='cover']");
    let autor = formu.querySelector("input[name='autor']");
    let sinopsis = formu.querySelector("textarea[name='resumen']");

    //botones
    let insertar = formu.querySelector("input[value='Insertar']");
    let resetear = formu.querySelector("input[value='Resetear']")
    let cancelar = formu.querySelector("input[value='Cancelar']");


    //-------------BOTON DE RESETEAR----------------
    resetear.addEventListener("click", () => {
        formu.reset();
    }, false);


    //-------------BOTON DE INSERTAR----------------
    insertar.addEventListener("click", (event) => {
        //Dentro de esto boton recojo los datos

        let libro = {
            title: titulo.value,
            ISBN: ISBN.value,
            pages: paginas.value,
            genre: genero.value,
            year: anio.value,
            cover: portada.value,
            author: { name: autor.value },//es un objeto
            synopsis: sinopsis.value
        };

        //📦Guardar en localStorage
        localStorage.setItem("libroInsertado", JSON.stringify(libro));

        // ➡️Redirigir a la página donde se mostrará el libro
        window.location.href = "inicio.html";

    });


}