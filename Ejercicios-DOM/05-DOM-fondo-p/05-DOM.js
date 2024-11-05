/**
 * Crea un párrafo en HTML y ponle la clase “uno”. Usando CSS, coloca un fondo,
uno borde, una anchura y un color/tam de letra para esa clase. Crea la clase “dos”
similar a la clase “uno” pero con valores diferentes.

a) Cuando se haga click sobre el párrafo, cambia de la clase “uno” a la clase “dos”.
b) Cada vez que haga click en el párrafo, cambia de clase alternativamente.
 */

//MUY IMPORTANTE SINO NO CARGA
window.onload = function () {
    let dedo_parrafo = document.getElementsByClassName("uno")[0];

    dedo_parrafo.onclick = function () {
        if(dedo_parrafo.getAttribute("class") == "uno"){//con this es mejor
            dedo_parrafo.setAttribute("class","dos");

        }else{
            dedo_parrafo.setAttribute("class","uno");

        }
    }
}