
window.onload = function(){
    //primero voy a comenzar con fondo y letras negras

    let contenido = document.getElementsByClassName("contenido")[0];
    let estado = document.getElementById("estado");//no se considera un array solo devuelve un elemento

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



    /**----------------HAGO DE NUEVO EL SPOILER PERO BIEN--------------- */
    let mostrar = document.getElementsByTagName("input")[0];
    let img = document.querySelector("img");

    //le pongo un filtro a mi img
    img.style.filter = "blur(10px)";

    mostrar.onclick = () =>{
        if(mostrar.getAttribute("value") == "Mostrar"){
            img.style.filter = "blur(0px)";//quito filtro
            mostrar.setAttribute("value", "Ocultar");
        } else {
            img.style.filter = "blur(50px)";
            mostrar.setAttribute("value", "Mostrar");
        }
    }

}