/**Crea una galería de fotos (al menos 5 fotos) que posea un botón para avanzar y otro
para retroceder.
• El botón para avanzar hará que se muestre la siguiente foto cada vez que se
pulse. Si se llega al final de la lista de imágenes, el botón deja de funcionar.
• El botón para retroceder hará que se muestre la foto anterior cada vez que se
pulse. Si se llega al principio de la lista de imágenes, el botón deja de funcionar.
b) Mejorar el ejercicio haciendo que el botón correspondiente se deshabilite
cuando se alcanza el final/principio de la lista de fotos.*/

window.onload = function(){//permite que se carge antes el js

    let indice = 0;

    let imagenesLista = [
        './fotos/gato1.jpg',
        './fotos/gato2.png',
        './fotos/gato3.jpeg',
        './fotos/gato4.jpg',
        './fotos/gato5.jpg'
    ]
    let imagenes = document.getElementById("fotos");
    let retroceder = document.getElementById("retroceder");
    let avanzar = document.getElementById("avanzar");

    function actualizarImagenes(){
        imagenes.src = imagenesLista[indice];
        
        // Desactivar los botones si estamos al inicio o final del array
        retroceder.disabled = indice === 0;
        avanzar.disabled = indice === imagenesLista.length - 1;
    
    }

    function nextImage() {
        if (indice < imagenesLista.length - 1) {
            indice++;
            actualizarImagenes();
        }
    }


    function prevImage() {
        if (indice > 0) {
            indice--;
            actualizarImagenes();
        }
    }
    
     // Asignar las funciones a los botones cuando se hagan clic
    avanzar.onclick = nextImage;
    retroceder.onclick = prevImage;

    actualizarImagenes();

    };

    //Explicacion de Jaime buene ejercicio para practica pero se le añade un boton para añadir una imagen


