//creo mi funcion para que se carge antes el js
window.onload = function () {

    /**
     * Coloca una imagen dentro de un DIV con position: absolute. Crea dos botones:
        • Al pulsar uno de ellos la imagen debe moverse 5px hacia la derecha de la
        pantalla.
        • Al pulsar el otro, la imagen debe moverse 5px hacia la izquierda de la pantalla.

        b) Mejora el ejercicio haciendo que la imagen no pueda salirse de los limites de la
        pantalla. Nota: realiza el cálculo a ojo, ya aprenderemos a obtener las medidas de la
        página correctamente.

        c) Realiza de nuevo el ejercicio pero esta vez la imagen se 
        movera hacia la derecha mientras este el raton encima de ella
        coloca un boton para resetear los valores de la posicion.
     */
    let imagen = document.getElementsByTagName("div")[0];
    let botonR = document.getElementById("botonR");
    let botonL = document.getElementById("botonL");
    let botonReset = document.getElementById("botonReset");
    let contPx = 1;//se reinicia es mi contador

    botonR.onclick = function () {

        if (5 * contPx <= (screen.width - imagen.clientWidth)) {
            imagen.style.left = (5 * contPx) + "px";
            contPx++;
            console.log(imagen.style.left);
        }
    }

    botonL.onclick = function () {

        if (contPx > 1) {

            imagen.style.left = (parseInt(imagen.style.left) - 5) + "px";//fue duro
            console.log(imagen.style.left);
            contPx--;

        }
    }

    //Apartado c --> se mueva cuando el raton este dentro
    imagen.onmouseenter = function () {
        if (5 * contPx <= (screen.width - imagen.clientWidth)) {
            imagen.style.left = (5 * contPx) + "px";
            contPx++;
        }
    }

    //Boton para resetear valores


    botonReset.onclick = function () {
        contPx = 0;//reseto el contador
        if (5 * contPx <= (screen.width - imagen.clientWidth)) {
            imagen.style.left = (5 * contPx) + "px";
            contPx++;
        }

    }
}

