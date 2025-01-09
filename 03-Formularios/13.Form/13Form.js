window.onload = function(){
    //accedo a los elementos
    let formu = document.querySelector("form");
    let contrasenia = formu.querySelector("input[id='contraseña']");
    let reset = formu.querySelector("input[name='resetear']");
    let box = formu.querySelector("input[id='box']");
    let imgDormido = formu.querySelector("img")

    //evento
    box.addEventListener("click", (event) =>{
        if(box.checked){
            contrasenia.setAttribute("type","text");
        } else {
            contrasenia.setAttribute("type","password");
        }
    },false);

    //evento para imagen
    box.addEventListener("mousedown", (event) =>{
        contrasenia.setAttribute("type","text");
        contrasenia.setAttribute("type","password");
        imgDormido.setAttribute("src" , "./img/visibilidad.png")
    },false);
        
    

    //boton resetear
    reset.addEventListener("click", (event) =>{
        formu.reset();
    },false);
}