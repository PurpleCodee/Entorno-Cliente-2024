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
        top: 0; /*Me aseguro de que el fondo se alinee con la pantalla*/
        left: 0;
        width: 100%; /*ocupo todo el ancho*/
        height: 100%;/*ocupo todo el alto*/
    `);

    //3 - Agrego el fondo a mi body (se dan las manitas).
    document.body.appendChild(divFondo);

    //4 - Inicializo los indices del fondo y la figura
    let i_fondos = 0;
    let i_ccolores = 0;
    let figura = null; // Declaro la figura fuera del evento
    let arrastrando = false;//Declaro un booleano para comprobar si estoy o no arrastrando

    /**----------------EVENTO PARA EL COLOR DEL FONDO----------------- */
    /*Nota-  utilizo como parametro la (e) de event es un objeto de evento de js que contiene varias informacion (clientX y el clientY) */
    divFondo.onmousedown = (e) => {
        // Cambio el color del fondo cada vez que hago un click.
        divFondo.style.backgroundColor = fondos[i_fondos];
        i_fondos++;

        //Compuebo si el indice es mayor o igual al tamaño del "array", si es asi actualizo y comienza de nuevo
        if (i_fondos >= fondos.length) {
            i_fondos = 0;
        }

        /**----------------CODIGO DE CREAR LAS FIGURAS----------------- */
        // Compruebo si la figura existe si existe la elimino y creo una nueva (todo sucede cada vez que mantengo presionado el click izq)
        if (figura) {
            figura.remove(); 
        }

        // Creo la figura - (creo un nodo)
        figura = document.createElement("div");
    
        /**---------------ENCUENTRO LAS COORDENADAS DEL PUNTERO---------------*/
        //Guardo las cordenadas exactas del puntero cada vez que se hace click
        let cordenadaX = e.clientX;
        let cordenadaY = e.clientY;

        // Calculo el tamaño de la figura en px 10% --> 0.1 utilizo el anchoVisible de la pantalla * 10%
        let tamanioFigura = window.innerWidth * 0.1; // 10vw en píxeles

        // Centro la figura con el puntero (hago que el puntero siempre este en el centro de la figura)
        //Ajusto la posicion de la figura en px accediendo por el estilo
        let posX = `${cordenadaX - tamanioFigura / 2}px`;//ancho calculo la mitad del tamaño de cada cordenada (para poscionarme en medio)
        let posY = `${cordenadaY - tamanioFigura / 2}px`;//alto

        // Configuración de estilos y atributos de la figura
        figura.setAttribute("style",
            `width: 10vw;
             height: 10vw;
             position: absolute;
             background-color: ${ccolores[i_ccolores]};
             left: ${posX}px;
             top: ${posY}px; `
        ); 

        // Incremento el  indice de color (cada vez que hace click)
        i_ccolores++;
        if (i_ccolores >= ccolores.length) {
            i_ccolores = 0;
        }

        //Creo la forma de una manera aleatoria
        if (Math.random() < 0.5) {
            //Creo una figura redonda
            figura.style.borderRadius = "0";
        } else {
            figura.style.borderRadius = "50%";
        }

        // Añado la figura al fondo (se dan las manitas)
        divFondo.appendChild(figura);

        //Llamo a mi funcion y le paso en los argumentos (las cordenadas y el tamaño de mi figura) -> centra en puntero en medio de la figura
        
        moverFigura(e.clientX, e.clientY, tamanioFigura);
        
        //Una vez centrado el puntero activo el que la figura se pueda mover
        arrastrando = true;

        //Nita - Con el evento onmousemove se activa cuando el puntero se mueve en un elemento
        //Compuruebo si el booleano es true (o sea que elemento se esta arrastrando -> llamo a mi puncion para mover la figura)
        divFondo.onmousemove = (e) => {
            if (arrastrando){
                moverFigura(e.clientX, e.clientY, tamanioFigura);
            }
        };

    };

    //Creo una funcion que llamare para poder mover la figura 
    //Nota - Esta funcion lo que hace es centrarme el puntero en medio de la figura siempre
    function moverFigura(x, y, tamanio) {
        figura.style.left = `${x - tamanio / 2}px`;
        figura.style.top = `${y - tamanio / 2}px`;
    }

    //------------------CUANDO DEJO DE PULSAR---------(desaparece la figura)
    divFondo.onmouseup = () => {
        //compueblo que si existe la elimina
        if (figura) {
            figura.remove();
        }
        arrastrando = false;//actualizo a que no se puede mover
        divFondo.onmousemove = null; //me elimina el evento onmousemove (ya que la figura se ha eliminado)
    };
}
