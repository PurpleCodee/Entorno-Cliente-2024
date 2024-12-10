window.onload = function(){
    // 1. Primero accedo a los elementos Accedo al formulario
    let form = document.forms[0];
    //2. Accedo a los elementos
    let texto_aCopiar = form.elements[0];
    let texto_copiando = form.elements[1];

    texto_aCopiar.oninput = () =>{
        texto_copiando.value = texto_aCopiar.value;
        console.log(texto_copiando.value);
    }
}