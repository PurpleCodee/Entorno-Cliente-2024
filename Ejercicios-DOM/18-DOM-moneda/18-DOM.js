let timerProgress;
window.onload = function(){
    let barraProgreso = document.getElementsByClassName("progreso")[0];
    let valorMoneda = document.getElementsByClassName("monedas")[0];
    let generarDinero = document.getElementById("darDinerito");

    generarDinero.onclick = function(){
        //desabilito el boton cada vez que se pulsa
        generarDinero.disabled = true;
        //en mi timer se realizara la accion de la barra de progreso
        if(parseInt(barraProgreso.getAttribute("value")) <= 0){
            let contProgreso = 0;

            timerProgress = setInterval(() => {
                contProgreso+=10;//el progreso incremente de 10 en 10
                barraProgreso.setAttribute("value", contProgreso);

                /**---------TERMINO EL TIMER---------- */

                if(contProgreso > barraProgreso.max){//el maximo de la barra
                    clearInterval(timerProgress);
                    //una vez termina de cargar la barra habilito el boton
                    generarDinero.disabled = false;

                    //si es un numero valido
                    if(!isNaN(parseInt(valorMoneda.textContent))){
                        //Convierto el texto en un numero
                        valorMoneda.textContent = parseInt(valorMoneda.textContent) + 1;
                        console.log(valorMoneda.textContent);
                    }else{
                        //si no es valido le doy un valor por defecto
                        valorMoneda.textContent = 1;
                    }
                    contProgreso = 0;
                    barraProgreso.setAttribute("value",contProgreso);
                }
            },1000);
        }
        
    }
}