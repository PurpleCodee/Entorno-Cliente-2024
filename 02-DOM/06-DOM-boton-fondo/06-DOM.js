//Con esta funcion permito que se carge antes el html
window.onload = function () {
    /**
     * 6.- Crea cinco botones y coloca como value un color diferente a cada uno. Cada vez
        que se pulse uno de los botones, el fondo de la página debe cambiar al color indicado
        por ese botón.
     */

    let botones = document.getElementsByTagName("button");//selecciono todos los botones dentro del div

    //recorro con un for normal porque se puede mi array de botones
    for(let i = 0; i < botones.length; i++){

        //Utilizo una funcion anonima para que la accion se aquive cada vez que pulso un boton
        botones[i].onclick = function () {
            let color = botones[i].getAttribute("value");
            document.body.style.backgroundColor = color;//es el modo directo de cambiar el fondo de la página desde JavaScript sin necesidad de modificar el CSS
        }
    }

    //-----------------------------------------------------------------------------
    let botones2 = document.querySelectorAll(".botones2 button");

    botones2.forEach(boton => {
        boton.onclick = function(){
            let color2 = boton.getAttribute("value");
            document.body.style.backgroundColor = color2;
        } 
    });

    //modificacion para que cuando haga clic en el fondo se restaure todo

    /*-------------UTILIZO NODOS------------*/
    //1- creo el fondo
    let fondo = document.createElement("div");
    //2- configuro para que ocupe toda la pantalla
    fondo.setAttribute("style", `position: fixed; /*fijo para cubrir toda la ventana*/
            top: 0;
            left: 0;
            width: 100%; /*ocupo todo el ancho*/
            height: 100%;/*ocupo todo el alto*/
            background-color: rgba(0, 0, 0, 0.2); /* Color gris semitransparente */
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: -1;/*lo pongo por encima de otros elementos*/
            `);
    //3- agrego el fondo al body
    document.body.appendChild(fondo);
    fondo.onclick = () =>{
        document.body.style.backgroundColor = "white";
    }
}