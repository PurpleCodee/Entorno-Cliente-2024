window.onload = function () {
    //accedoa los elementos
    let textArea = document.getElementsByTagName("textarea")[0];
    let publicar = document.getElementsByTagName("button")[0];
    let contador = 0

    let errores = [];
    //listener para escuchar el boton de publicar
    publicar.addEventListener("click", function () {


        document.body.appendChild(divContenido);
        let divContenido = document.createElement("div");

        divContenido.textContent = textArea.value.substring(0, 50);

        divContenido.style.border = "2px solid purple";
        divContenido.style.padding = "10px";
        divContenido.style.marginTop = "10px";
        divContenido.style.backgroundColor = "#f0f0f0";

        textArea.value = "";
    });
}