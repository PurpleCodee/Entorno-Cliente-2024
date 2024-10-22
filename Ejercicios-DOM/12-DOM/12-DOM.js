//creo mi funcion para que se carge antes el js
window.onload = function(){

    /**
     * Coloca una imagen dentro de un DIV con position: absolute. Crea dos botones:
        • Al pulsar uno de ellos la imagen debe moverse 5px hacia la derecha de la
        pantalla.
        • Al pulsar el otro, la imagen debe moverse 5px hacia la izquierda de la pantalla.
     */
    let imagen = document.getElementsByTagName("div")[0];
    let botonR = document.getElementById("botonR");
    let botonL = document.getElementById("botonL");
    let contPx = 1;//se reinicia 

    botonR.onclick = function(){
        
        if(5 * contPx  <= (screen.width - imagen.clientWidth) ){
            imagen.style.left = (5 * contPx) + "px";
            contPx++;
            console.log(imagen.style.left);
        }
      }

      botonL.onclick = function(){

        if(contPx > 1){

            imagen.style.left = (parseInt(imagen.style.left) - 5) + "px" ;//fue duro
            console.log(imagen.style.left);
            contPx--;

        }  
    }

    
    console.log(screen.width);
  

    /**
     * b) Mejora el ejercicio haciendo que la imagen no pueda salirse de los limites de la
        pantalla. Nota: realiza el cálculo a ojo, ya aprenderemos a obtener las medidas de la
        página correctamente.
     */

    }

   
