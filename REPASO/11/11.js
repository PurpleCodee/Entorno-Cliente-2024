//Primero de todo hacemos esto para que se carge el js
window.onload = function () {
    //guardo el valor de mis campos
    let formu = document.querySelector("form");
    let dato_dni = formu.querySelector("input[id='dni']");
    let dato_nombre = formu.querySelector("input[id='nombre']");//si tiene alguna forma de acceder
    let dato_apellido = formu.getElementsByTagName("input")[2];//o accedo por la posicion
    let dato_fecha = formu.querySelector("input[id='fecha-nacimiento']");
    let dato_web = formu.querySelector("input[id='web']");
    let dato_contraseña = formu.querySelector("input[id='password']");
    let listaPaises = formu.querySelector("select");
    let reset = formu.getElementsByTagName("button")[0];
    let enviar = formu.getElementsByTagName("button")[1];
    console.log(enviar);


    //Primero creo el evento para resetear el formulario
    reset.addEventListener("click", (event) => {
        formu.reset();
        //selecciono todos los mensajes
        let mensajeError = document.querySelectorAll(".error");
        //los recorro y los borro
        for (const mensaje of mensajeError) {
            mensaje.remove();
        }

        let mensajeBien = document.querySelectorAll(".valido");
        for (const mensajito of mensajeBien) {
            mensajito.remove();
        }


    }, false);

    //FUNCIONES PROPIAS -- errores
    //en este array acumulo los errores
    let errores = [];
    function crearError(mensajeError) {

        if (mensajeError.trim() !== "") {

            //lo que hace es comprobar si esta el mensaje de error uy no lo repite
            if (errores.includes(mensajeError)) {
                return;
            }
        }

        let errDiv = document.createElement("div");
        let texto = document.createTextNode(mensajeError);
        errDiv.setAttribute("class", "error");
        errDiv.appendChild(texto);
        formu.appendChild(errDiv);
        errDiv.style.border = "2px solid red", errDiv.style.marginTop = "10px";

        //meto el error en el array
        errores.push(mensajeError);
    }

    let validados = [];
    function todoGood(mensajeBien) {
        if (mensajeBien.trim() !== "") {

            //lo que hace es comprobar si esta el mensaje de error uy no lo repite
            if (validados.includes(mensajeBien)) {
                return;
            }
        }

        let bienDiv = document.createElement("div");
        let texto = document.createTextNode(mensajeBien);
        bienDiv.setAttribute("class", "valido");
        bienDiv.appendChild(texto);
        formu.appendChild(bienDiv);
        bienDiv.style.border = "2px solid green", bienDiv.style.marginTop = "10px";

        //meto el error en el array
        validados.push(mensajeBien);
    }

    //Despues creo el evento para mandar los datos del formulario
    enviar.addEventListener("click", (event) => {
        event.preventDefault();

        //booleano para comprobar que es valido
        let esValido = true;

        //----------------------DNI------------------------
        if (dato_dni.value.trim() === "") {
            crearError("Por favor rellena el campo del nombre");
            esValido = false;
            dato_dni.focus();
        } else {
            //Extraigo caracter y numeros
            let caracter = dato_dni.value.charAt(0);
            let numeros = dato_dni.value.slice(1);

            if (caracter < 'A' || caracter > 'Z') {
                crearError("Debe de contener una letra mayuscula al principio"),
                esValido = false,
                dato_dni.focus();

            } else if (numeros.length < 8 && isNaN(numeros)) {
                crearError("La longitude deve de ser de 8"),
                esValido = false,
                dato_dni.focus();
            } else {
                esValido = true , todoGood("El DNI es valido :)");
            }
        }

        //----------------------NOMBRE------------------------
        if(dato_nombre.value.trim() === ""){
            crearError("El campo del nombre no debe de esta vacio");
            esValido = false,
            dato_nombre.focus();
        } else {
             //la paso a mayuscula/separo por espacio
            let priLetra = dato_nombre.value.charAt(0).toUpperCase().trim();
            let palabras = dato_nombre.value.trim().split(" ");

            if(priLetra < 'A' || priLetra > 'Z'){
                crearError("No es una letra"); 
                esValido = false,
                dato_nombre.focus();

            } else if(palabras.length < 1 ||palabras.length > 2){
                crearError("Maximo 2 palabras, minimo 1 palabra");
                esValido = false,
                dato_nombre.focus();

            } else{
                todoGood("El nombre es valido :)");
                esValido = true;
            }
        }
        //----------------------APELLIDO------------------------patrones
        if(dato_apellido.value.trim() === ""){
            crearError("El campo del apellido no debe de estar vacio");
            esValido = false;

        } else{
            let regrexApellido = /^[A-ZÑ][a-zñ]*(\s[A-ZÑ][a-zñ]*)?$/;
            if(!regrexApellido.test(dato_apellido.value.trim())){
                crearError("El apellido debe de comenzar en mayuscula y no pueden ser as de 3");
                esValido = false;
                dato_apellido.focus();
            } else {
                todoGood("El apellido es valido :)");
                esValido = true;
            }
        }
        //----------------------FECHA------------------------
        if(dato_fecha.value.trim() === ""){
            crearError("La fecha debe de seleccionarse");
            esValido = false;
            dato_fecha.focus();
        } else {
            //convierto la fecha en un array
            let fechaSeparada = dato_fecha.value.split("-");
            if(fechaSeparada[0].length === 4 || fechaSeparada[1].length === 2 || fechaSeparada[2].length === 2 ){
                todoGood("La fecha es valida");
            } else {
                dato_fecha.focus();
                crearError("El formato de la fecha no es valido");
                esValido = true;
            }
        }
        //----------------------WEB------------------------
        if(dato_web.value.trim() === ""){
            crearError("El campo de la web debe ser rellenado");
            esValido = false;
            dato_web.focus();
        } else {
            if(!dato_web.value.includes("https://")){
                crearError("El formato de la web no es valido :(");
                esValido = false;
                dato_web.focus();

            } else {
                todoGood("El formato de la web es valido");
                esValido = true;
            }
        }
        //----------------------CONTRASEÑA------------------------
        if(dato_contraseña.value.trim() === ""){
            crearError("El campo de la contraseña debe de rellenarse");
            esValido = false;
            dato_contraseña.focus();
        } else {
            if(dato_contraseña.value.length !== 8){
                crearError("La contrasela debe de ser de una longitud de 8");
                esValido = false;
                dato_contraseña.focus();

            } else {
                todoGood("La contraseña es valida");
                esValido = true;
            }
        }
        //----------------------GENERO------------------------
        let generos = formu.querySelector("input[name='genero']:checked");
        if(!generos){
            crearError("Debes de selecionar un genero");
            esValido = false;
            generos.focus();
        } else {
            todoGood("Has selecionado el genero: " + generos.value);
            esValido = true;
        }
        //----------------------SELECT------------------------
        if(listaPaises.value.trim() === ""){
            esValido = false;
            listaPaises.focus();
            crearError("El pais seleccionado no esta en la lista");
          } else {
            todoGood("Se ha seleccionado: " + `${listaPaises.value}`);
            esValido = true;
          }

          if (esValido) {
            // Muestra todos los datos correctos
            if (
                dato_dni.value &&
                dato_nombre.value &&
                dato_apellido.value &&
                dato_fecha.value &&
                dato_web.value &&
                dato_contraseña.value &&
                generos.value &&
                listaPaises.value
            ) {
                let divDatos = document.createElement("div");
                divDatos.innerHTML = `
                    <p>El DNI es: ${dato_dni.value}</p>
                    <p>El Nombre es: ${dato_nombre.value}</p>
                    <p>El Apellido es: ${dato_apellido.value}</p>
                    <p>La fecha es: ${dato_fecha.value}</p>
                    <p>La web es: ${dato_web.value}</p>
                    <p>El genero es: ${generos.value}</p>
                    <p>El Pais es: ${listaPaises.value}</p>
                    <p>La contraseña es: ${dato_contraseña.value}</p>
                `;
                document.body.appendChild(divDatos);
            }
        
            // Redirige después de un breve retraso (opcional)
            setTimeout(() => {
                window.location.href = "./web_bien.html";
            }, 6000); // Redirige después de 2 segundos
        }
    }, false);

}