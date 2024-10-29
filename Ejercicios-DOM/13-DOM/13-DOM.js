/**
 *  Crea el efecto SPOILER que se puede ver en foros y otros páginas.
    Se oculta el contenido de un elemento (pej, un párrafo) y sólo se muestra el mensaje
    “Mostrar”. Al hacer click sobre dicho mensaje, se muestra el contenido del elemento y
    el mensaje cambia a “Ocultar”. Si se pulsa sobre ese mensaje, el elemento vuelve a su
    estado original (contenido oculto y mensaje “Mostrar”).
 */

window.onload = function(){
    //primero voy a comenzar con fondo y letras negras

    let contenido = document.getElementsByClassName("contenido")[0];
    let estado = document.getElementById("estado");//no se considera un array solo devuelve un elemento
    console.log(contenido.innerText);//muestro que funcione correctamente
    console.log(estado.innerText);

    estado.onclick = function(){
        if(contenido.style.backgroundColor = "black" && estado.textContent == "MOSTRAR"){//si es negro
            contenido.style.backgroundColor = "white";//lo cambio a blanco
            contenido.textContent="Soy un spoiler";//añado texto

            estado.style.color = "white";//cambio color de letra
            estado.style.backgroundColor = "grey";
            estado.textContent = "OCULTAR";
        }
        else{
            contenido.style.backgroundColor = "black";

            estado.style.color = "black";//cambio color de letra
            estado.style.backgroundColor = "white";
            estado.textContent = "MOSTRAR";
            
            contenido.textContent = "";//dejo el contenido vacio

        }
    }

    //hacerlo entero de la forma de Jaime el mio es muy largo hacerlo con el display
}