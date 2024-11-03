//Declaro mis variables globales de timer un timer por cada corredor
let timerDiv1;
let timerDiv2;
let timerDiv3;
let timerDiv4;

//primero funcion para que se carge el html
window.onload = function(){

    //accedo a los div
    let corredor1 = document.getElementsByClassName("div1")[0];
    let corredor2 = document.getElementsByClassName("div2")[0];
    let corredor3 = document.getElementsByClassName("div3")[0];
    let corredor4 = document.getElementsByClassName("div4")[0];

    let botonCorrer = document.getElementById("CORRER"), botonReset = document.getElementById("RESET");

    let contPx = 1; //lo inicializo en uno para que pueda sumarse al numero random
    let contPx2 = 1;
    let contPx3 = 1;
    let contPx4 = 1;



    //funcion del boton
    botonCorrer.onclick = function(){
        //aqui dentro meto todos los timers y las comprobbaciones para que se muevan los divs de manera aleatorio
        timerDiv1 = setInterval(() => {
            let randomPx = Math.random() * (50 - 1 + 1) + 1; //max - min + 1 + min
            //mov aleatorio -- incremento
            contPx+= randomPx;//contador aumenta mediante los pxRandoms
            if(contPx <= (window.innerWidth - corredor1.clientWidth)){
                corredor1.style.left = contPx + "px";

            } else {
                clearInterval(timerDiv1); //detengo el mov si llego al limite
                corredor1.style.left = (window.innerWidth - corredor1.clientWidth) + "px";
            }

        },1000);

        timerDiv2 = setInterval(() => {
            //importante el random dentro del setInterval
            randomPx = Math.random() * (50 - 1 + 1) + 1;
            contPx2+=randomPx;//pixeles que incremento mas el numero randon aleatorio
            if(contPx2 <= (window.innerWidth - corredor2.clientWidth)){
                //hago que el corredor 2 se mueva hacia la izquierda
                corredor2.style.left = (contPx2 + "px");
            } else {
                clearInterval(timerDiv2);
                corredor2.style.left = (window.innerWidth - corredor2.clientWidth) + "px";//hago que llegue al final de la pantalla*/
            }
        },1000)

        timerDiv3 = setInterval(() => {
            //declaro el random aqui para que se actualize en el nuevo div
            randomPx = Math.random() * (50 - 1 + 1) + 1;
            contPx3+=randomPx;
            //compruebo el ancho de la pantalla y el ancho del elemento
            if(contPx3 <= (window.innerWidth - corredor3.clientWidth)){
                //si el contador mas el numero randon que son px son <= a la resta del ancho completo visble de la mantalla menos el ancho del elemento
                corredor3.style.left = (contPx3 + "px");
                //muevo el div hcia la derecha
            } else {
                clearInterval(timerDiv3);
                corredor3.style.left = (window.innerWidth - corredor3.clientWidth) + "px";
            }

        },1000)

        timerDiv4 = setInterval(() => {
            randomPx = Math.random() * (50 - 1 + 1) + 1;
            contPx4+=randomPx;
            if(contPx4 <= (window.innerWidth - corredor4.clientWidth)){
                corredor4.style.left = (contPx4 + "px");
            } else {
                clearInterval(timerDiv4);
                corredor4.style.left = (window.innerWidth - corredor4.clientWidth) + "px";
            }
        },1000)


    }

    botonReset.onclick = function(){
        //detengo el timer
        clearInterval(timerDiv1), clearInterval(timerDiv2), clearInterval(timerDiv3), clearInterval(timerDiv4);
        //actualizo contador a 0
        contPx = 0, contPx2 = 0, contPx3 = 0, contPx4 = 0;
        //actualizo los px a 0 px
        corredor1.style.left = "0px", corredor2.style.left = "0px", corredor3.style.left = "0px", corredor4.style.left = "0px";
    }

}