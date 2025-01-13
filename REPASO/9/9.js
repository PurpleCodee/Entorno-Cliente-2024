window.onload = function () {
    //accedo a los elementos
    let formu = document.querySelector("form");
    let textoDni = formu.getElementsByTagName("input")[0];
    let textoNombre = formu.getElementsByTagName("input")[1];
    let textoApellido = formu.getElementsByTagName("input")[2];
    let enviar = formu.querySelector("button");

    //array para guardar errores y aciertos
    let errores = [];
    let aciertos = [];

    //booleano para comprobar que el valido el formulario
    let esValido = true;

    function limpiarMensajes() {
        mensaje = document.querySelectorAll(".error, validos")
        for (const msg of mensaje) {
            msg.remove();
        }
        //actualizo los arrays a vacios
        errores = [];
        aciertos = [];
    }

    //FUNCIONES PROPIAS ------ MOSTRAR MENSAJES
    function mostrarErrores(mensaje) {
        if (!errores.includes(mensaje)) {
            //creo elemento
            let divErr = document.createElement("div");
            let textoError = document.createTextNode(mensaje);
            //le pongo atributos al div
            divErr.setAttribute("class", "error");
            divErr.style.border = "2px solid red", divErr.style.marginTop = "10px";
            //añado al papa
            divErr.appendChild(textoError);
            formu.appendChild(divErr);

            //metos los errores en el array
            errores.push(mensaje);
        }
    }

    function mostrarAciertos(mensajeBien) {
        if (!aciertos.includes(mensajeBien)) {
            let aciertoDiv = document.createElement("div");
            let textoBien = document.createTextNode(mensajeBien);
            aciertoDiv.setAttribute("class", "validos");
            aciertoDiv.style.border = "2px solid green", aciertoDiv.style.marginTop = "10px";
            aciertoDiv.appendChild(textoBien);
            formu.appendChild(aciertoDiv);

            //meto los aciertos en su array de aciertos
            aciertos.push(mensajeBien);
        }
    }

    enviar.addEventListener("click", function (event) {
        event.preventDefault();

        let letrasValidas = "TRWAGMYFPDXBNJZSQVHLCKE";

        //----------------VALIDAR DNI----------------
        if (textoDni.value.trim() === "") {
            mostrarErrores("El campo DNI no puede estar vacio")
            textoDni.focus();
            esValido = false;
        } else {
            if (textoDni.value.length !== 9) {
                mostrarErrores("El DNI debe de tener exactamente 9 numeros y una letra");
                textoDni.focus();
                esValido = false;

            } else {

                let letra = textoDni.value.slice(-1).toUpperCase();
                let numeros = textoDni.value.slice(0, -1);

                if (isNaN(parseInt(numeros)) || parseInt(numeros) < 0) {
                    mostrarErrores("Debes de indicar numeros");
                    textoDni.focus();
                    esValido = false;

                } else {
                    // Calcular la letra correcta
                    let indice = parseInt(numeros, 10) % 23;
                    let letraCorrecta = letrasValidas[indice];

                    if (letra !== letraCorrecta) {
                        mostrarErrores("La letra no es correcta")
                        esValido = false;
                        textoDni.focus();
                    } else {
                        mostrarAciertos("El DNI es valido");
                        esValido = true;
                    }
                }
            }
        }
    }, false);
}