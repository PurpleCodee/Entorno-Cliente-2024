window.onload = function(){
    //declaro las variables y accedo a l os elemeton
    //let lista = document.getElementsByClassName("listaElementos")[0];
    //accedo al los li
    //let elementos = document.getElementsByTagName("li")[0];
    //mi boton
    let aniadir = document.getElementById("botonAnadir");

    //recorro los elementos(elemento)
    //lo puedo hacer con un for normal
    /*Array.from(elementos).forEach(elemento => {
        
        
    });*/

    aniadir.onclick = function(){
        //creo un elemento li
        let nuevo = document.createElement("li");
        let usuarioTexto = document.createTextNode(prompt("Dime una frase o palabra"));
        nuevo.appendChild(usuarioTexto);
        let padre = nuevo.parentNode;
        


    }


}