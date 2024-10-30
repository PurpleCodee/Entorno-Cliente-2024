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
}