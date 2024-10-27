/**
 * 1: En el menu solamente deben de aparecer a simple vista las opciones principales
 * 2: Cuando me posicione encima de una opcion principal apareceran la demas opciones
 * 3: pero las demas desamarecen
 */

window.onload = function(){

    //accedo directamente al elemento
    let lista = document.getElementsByClassName("listaMenu")[0];//es un "array"
    // Obtén todos los elementos <li> dentro de "listaMenu"
    let elementos = lista.getElementsByTagName("li");//de esta manera accedo directamente al elemento de li

    //lo recorro y lo imprimo
    for(let i = 0; i < elementos.length; i++){
        //acedoa los elementos de ul
        let subElemento = elementos[i].getElementsByTagName("ul")[0];
        elementos[i].onmouseover = function(){

            if(subElemento){//si hay subElento = a si existe elemento
                subElemento.style.display = "block"; // Aparece la sublista
            }     
        };

        elementos[i].onmouseout = function() {
            if (subElemento) {
                subElemento.style.display = "none"; // Desaparece la sublista
            }
        };  
    }

    //Con Array.from puedo recorrer la lista y acceder un un for each ya que byClassNamwe es un HTMLCollection y no una lista de nodos que si se podria recorrer con el querySelector
    //
   /* Array.from(elementos).forEach(elemento => {
        console.log(elemento.innerText);
        
    });*/


}