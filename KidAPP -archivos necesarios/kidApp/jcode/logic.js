let fondos = ["red", "green", "blue", "yellow", "orange", "pink", "lightblue", "lightgreen"];
let ccolores = ["#00FF48", "#D4478E", "#FFD100", "#0070FF", "#7AAA83", "#385B66", "#ED91BF", "#95AD95"];

window.onload = () => {
    /**----------------CODIGO DE CREAR EL FONDO----------------- */
    //Nota: Configuro las medidas del fondo.

    //1 - Creo nodo que va a contener el fondo.
    let divFondo = document.createElement("div");

    //2 - Configuro mi nuevo div con propiedades para que ocupe toda la pantalla.
    divFondo.setAttribute("style", `
        position: fixed; /*fijo para cubrir toda la ventana*/
        top: 0; /*Me aseguro de que el dondo se alinee con la pantalla*/
        left: 0;
        width: 100%; /*ocupo todo el ancho*/
        height: 100%;/*ocupo todo el alto*/
    `);

    //3 - Agrego el fondo a mi body (se dan las manitas).
    document.body.appendChild(divFondo);

    //4 - Inicializo los indices del fondo y la figura
    let i_fondos = 0;
    let i_ccolores = 0;
    let figura;// Declaro la figura fuera del evento
    /**----------------EVENTO PARA EL COLOR Y EL FONDO Y LAS FIGURAS----------------- */
    divFondo.onmousedown = () => {
        //Cambio el color del fondo cada vez que hago un click.
        divFondo.style.backgroundColor = fondos[i_fondos];
        i_fondos++;

        if (i_fondos >= fondos.length) {
            i_fondos = 0;
        }

        /**----------------CODIGO DE CREAR LAS FIGURAS----------------- */
        //Si existe la elimino
        if (figura) {
            //elimino la figura anterior
            figura.remove();
        }

        //1 - Creo la figura  - (creo un nodo)
        figura = document.createElement("div");
        //2 - Le añado atributos al nodo de la figura que acabo de crear - tiene que tener un tamaño de 10% de ancho, 10% alto respecto la pantallas
        figura.setAttribute("style",
            `width: 10vw;
         height: 10vw;
         position: absolute;
         background-color: #00FF48;
         `);

          //cambio el color de mi figura y compruebo que exista
        if (figura) {
            figura.style.backgroundColor = ccolores[i_ccolores];
            i_ccolores++;

            if (i_ccolores >= ccolores.length) {
                i_ccolores = 0;
            }
        }

        //Creo la forma de una manera aleatoria
        if (Math.random() < 0.5) {
            //Creo una figura redonda
            figura.style.borderRadius = "0";
        } else {
            figura.style.borderRadius = "50%";
        }
        //3 - Añado la figura al padre - (se dan las manitas)
        divFondo.appendChild(figura);


        /**---------------ENCUENTRO AL CORDENADAS DEL PUNTERO---------------*/
        /**le digo que el tom sea clienY */
        /*onmouseup*/

    }
}
