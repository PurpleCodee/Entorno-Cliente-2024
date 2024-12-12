window.onload = function(){
let abuelo = document.querySelector("section");
let padre = document.querySelector("div");
let hijo = document.querySelector("p");


//se utiliza addeventListener --> me permite cambiar el orden de ejecucion de eventos anidados
/*
abuelo.addEventListener("click", function(){
    alert("Soy el abuelo SECTION");
});

padre.addEventListener("click", function(){
    alert("Soy el padre DIV");
});

hijo.addEventListener("click", function(){
    alert("Soy el hijo P");
});

//CON ONCLICK
hijo.onclick = function(){
    alert("Soy el primero");
}
*/
//Borrando eventlistener

function antinolo () {
    alert("Soy el primero");
}

hijo.addEventListener("click", antinolo);

let boton = document.querySelector("input[type='button']");

boton.onclick = function () {
    alert("borrando evento de hijo");
    hijo.removeEventListener("click", antinolo);
}
}
