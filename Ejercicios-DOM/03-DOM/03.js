/**
 * Crea un DIV con el número 0 en su interior. Bajo el DIV, coloca dos botones: uno
    para sumar y otro para restar.

• Si se pulsa el botón para sumar, se incrementa en uno el número que hay en el DIV en ese momento.
• Si se pulsa el botón restar, se decrementa en uno el número que hay en el DIV en ese momento.
 */

window.onload = function(){//para que se carge el js anntes que el html PONER SIEMPRE

}
  
function sumar(){
    //llegar a la etiqueta
    let div = document.getElementById("numero");
    //sacamos su contenido y lo pasamos a numero
    let valor = parseInt(div.innerText);
    //meto en el contenido lo que había +1
    div.innerText = valor+1;
}


function restar(){
    let div = parseInt(document.getElementById("numero"));

    let valor = parseInt(div.innerText);

    div.innerText = valor-1;

}