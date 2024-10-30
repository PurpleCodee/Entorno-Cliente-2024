
//Declaro mi variable global timer
let intervaloDescarga;//ES MI TIMER
let intervaloCarga;//ES MI TIMER

//siempre el windowsOnload para que se carge el html y el js
window.onload = function(){
    //declaro mis varibles con mis valores dentro
    let barraDescarga = document.getElementById("descarga");
    let barraCarga = document.getElementById("carga");
    let descargar = document.getElementById("botonDescargar");
    let cargar = document.getElementById("botonCargar");
    //Apartado b --> compruebo que si un boton a sido habilitado el otro no funciona

    //funciones de mis botones
        descargar.onclick = function(){
            //descargar.disabled = true;
            cargar.disabled = true;//desactivo los botones
            descargar.disabled = true;
            //accedo al "value" si hago "value", 0 estoy accediendo a undefined
            if(parseInt(barraDescarga.getAttribute("value")) <= 0){
                let contDescarga = 0
                //en esta variable guardo mi timer("bucle")
                intervaloDescarga = setInterval(() => {
                    contDescarga+=10;
                    barraDescarga.setAttribute("value", contDescarga);
    
                    if(contDescarga >= 100){
                        //si llega al final limpio el intervalo
                        clearInterval(intervaloDescarga);
                        cargar.disabled = false;//activo de nuevo los botones
                        descargar.disabled = false;
                    }
                }, /**segundos */ 1000);  
            }
        }
   
    cargar.onclick = function(){
        cargar.disabled = true;
        descargar.disabled = true;
        //cargar.disabled = true;
        if(parseInt(barraCarga.getAttribute("value")) <= 0){
            let contCarga = 0;//inicilizo el contador
            //en esta variable guaro mi timer
            intervaloCarga = setInterval(() => {
                contCarga+=10;
                barraCarga.setAttribute("value" , contCarga);

                //comprobacion de si llega al final
                if(contCarga >= 100){
                    //limpio el timer
                    clearInterval(intervaloCarga);
                    cargar.disabled = false;
                    descargar.disabled = false;
                }

            },/**milisegundos1000 */ 1000);
        }
    }

//--------------------DE ESTA MANERA LO HAGO SOLO CON EL VALUE----------------
    /*descargar.onclick = function() {
        if (barraDescarga.value > 0) {
            let contDescarga = 0;
            
            let intervaloDescarga = setInterval(() => {
                contDescarga += 10;
                barraDescarga.value = contDescarga;
                
                if (contDescarga >= 100) {
                    //como es una funcioN llamo por los parametros 
                    clearInterval(intervaloDescarga);
                }
            }, 2000);
        }
    }*/

};

/**
 * Usando las funciones setInterval y clearInterval de Js coloca una etiqueta meter,una etiqueta progrest
 * y un boton al lado de cada una, al pulsar un boton se debe de simular la carga de la barrita y muestra un mensaje cuando este cargada
 */

