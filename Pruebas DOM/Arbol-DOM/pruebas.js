window.onload = function(){

}
   

function manu(){
    let parras = document.getElementsByTagName("table");//referencia al primer parrafo de esta pagina

    let dedo = parras[0];

   console.log(dedo.width);
   dedo.width = "15px";
   dedo.id = "tablita";//lo crea si no existe

   dedo.setAttribute('width',2000)
   dedo.setAttribute("class", "goku")
   dedo.setAttribute("name", "Carlos")
    let valor = parseInt(dedo.getAtribute("width"));
   console.log(valor+3);
}


/*window.onload = function(){
    let bombi = document.getElementById("bombom");

    let body = document.getElementsByTagName("body")[0];

    body.bgcolor = "#FFF";

    DocumentFragment.bgcolor ="#FFF";//
}*/




function xaxe(){
    let bombi = document.getElementById("bombom");

    //ETIQUETA MUY PELIGROSA
    //innerHTML

    console.log(bombi.innerHTML);

    console.log(bombi.innerText);

    bombi.innerHTML = "<b>Acabo de cargarme el arbl DOM</b>"

}

window.onload = function(){
    let bombi = document.getElementById("bombom");
    console.log(bombi.innerHTML);//ver contenido
    console.log(bombi.innerText);
    console.log(bombi.textContent);//me devuelve el texto sin la etiqyeta


    
}

function cambiar(){
    //llegar al elemento
    let dedo = document.getElementsByTagName("input")[0];//llego al elemento
    
    //hago cambio
    dedo.type = "password";
}

/**MANEJAR ESTILOS CON EL DOM */
