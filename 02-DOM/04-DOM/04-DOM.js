/**Crea una galería de fotos (al menos 5 fotos) que posea un botón para avanzar y otro
para retroceder.
• El botón para avanzar hará que se muestre la siguiente foto cada vez que se
pulse. Si se llega al final de la lista de imágenes, el botón deja de funcionar.
• El botón para retroceder hará que se muestre la foto anterior cada vez que se
pulse. Si se llega al principio de la lista de imágenes, el botón deja de funcionar.
b) Mejorar el ejercicio haciendo que el botón correspondiente se deshabilite
cuando se alcanza el final/principio de la lista de fotos.*/
let timer;
window.onload = function(){//permite que se carge antes el js

    let fotos = document.getElementById("fotos");
    let retroceder = document.getElementById("retroceder");
    let avanzar = document.getElementById("avanzar");
    let aniadir = document.getElementById("aniadir");
    let i = 0;

    //Creo mi array de imagenes
    
    let lista_imagenes = [
        "./fotos/gato1.jpg",
        "./fotos/gato2.png",
        "./fotos/gato3.jpeg",
        "./fotos/gato4.jpg",
        "./fotos/gato5.jpg"
    ]

    //creo las funciones de mis botones
    avanzar.onclick = function(){
        //compruebo que si la i es menor que el ultimo elemento (5)
        if(i < lista_imagenes.length - 1){
            i++;//avanzo
            fotos.setAttribute("src",lista_imagenes[i]);//avanzo a la siguiente imagen
            
        }
    }

    retroceder.onclick = function(){
        //compruebo si la i es maño la que la primera pos pues retrocedo
        if(i > 0){
            i--;
            fotos.setAttribute("src",lista_imagenes[i]);
        }
    }

    //funcion de boton para aniadir una imagen al array de imagenes
    aniadir.onclick = function(){
        lista_imagenes.push("./fotos/gato6.jpg");
    }

    //funcion de automatico
    automatico.onclick = function() {
        // Detiene el temporizador si ya existe uno activo
        /*if (timer) {
            clearInterval(timer);
        }*/
        // Reinicia la posición y actualiza la imagen
        i = 0;
        fotos.setAttribute("src", lista_imagenes[i]);
    
        // Inicia un nuevo temporizador que avanza la imagen cada 3 segundos
        timer = setInterval(function() {
            i++;
            if (i >= lista_imagenes.length) {
                i = 0; // Reinicia el índice si llega al final
            }
            fotos.setAttribute("src", lista_imagenes[i]);
        }, 3000); // 3000 milisegundos = 3 segundos
    };
}


