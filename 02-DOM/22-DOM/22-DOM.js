window.onload = () => {
    // 1- Accedo a la imagen
    let imagen = document.querySelector("img");

    // 2- Agrego el evento de clic a la imagen
    imagen.onclick = () => {
        // 3- Creo la capa de fondo (div)
        let capa = document.createElement("div");
        
        // 4- Configurar el estilo de la capa para que cubra toda la pantalla y sea semitransparente
        capa.setAttribute("style", `
            position: fixed; /*fijo para cubrir toda la ventana*/
            top: 0;
            left: 0;
            width: 100%; /*ocupo todo el ancho*/
            height: 100%;/*ocupo todo el alto*/
            background-color: rgba(0, 0, 0, 0.5); /* Color gris semitransparente */
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;/*lo pongo por encima de otros elementos*/
        `);

        // 5- Creo la nueva imagen ampliada
        let nuevaImg = document.createElement("img");
        nuevaImg.src = imagen.src; // Uso la misma imagen

        nuevaImg.setAttribute("style", `
            width: 1280px;
            height: 720px;
            max-width: 100%; /* Limitar ancho para que no salga de la pantalla */
            max-height: 100%; /* Limitar altura para que no salga de la pantalla */
        `);

        // 6- Agrego la imagen ampliada dentro de la capa de fondo
        capa.appendChild(nuevaImg);

        // 7- Agrego la capa de fondo al body para mostrarla
        document.body.appendChild(capa);

        // 8- Evento para quitar la capa al hacer clic
        capa.onclick = () => {
            capa.remove(); // Elimino la capa y la imagen ampliada del DOM
        };
    }
};
