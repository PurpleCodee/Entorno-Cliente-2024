/**
 * Usando las funciones setInterval y clearInterval de Js coloca una etiqueta meter,una etiqueta progrest
 * y un boton al lado de cada una, al pulsar un boton se debe de simular la carga de la barrita y muestra un mensaje cuando este cargada
 */
let timer;
window.onload = function(){

    //accedo al meter de carga
    let carga = document.getElementById("carga");
    //accedo al progress de progresion
    let progresion = document.getElementById("progresion");

    //accedo a los botones
    let botonCarga = document.getElementById("boton1");
    let botonProgresion = document.getElementById("boton2");

    //funciones de los botones
        let contador = 0;
        botonCarga.onclick = function(){
            //cada vez que se le da click aumenta
            //y si llega al max para
            if(parseInt(carga.getAttribute("min") == 0 )){

           
            }
            timer = setInterval(function () {
                contador++;
                //carga.setAttribute("value", contador);
                console.log(contador)
    
            }, 500);
             //lo desabilito
             this.disabled = true;


           
        }

    botonProgresion.onclick = function(){
        //cada vez que se le da click aumenta
        //y si llega al max para

    }



}