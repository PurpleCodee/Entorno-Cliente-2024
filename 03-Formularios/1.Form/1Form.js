window.onload = function(){
    //1. Primero accedo a los elementos Accedo al formulario
    let form =  document.forms[0];
    //2. De esta manera accedo al primer elemento
    let texto_aCopiar = form.elements[0];
    let texto_pegado = form.elements[1];
    //3. Accedo al boton
    let botonCopiar = form.elements[2];
    console.log(botonCopiar.value);
    
    //4. Todo el funcionamiento va a ocurrir cuando se aprete al boton
    botonCopiar.onclick = () =>{
        texto_pegado.value = texto_aCopiar.value;
        console.log(texto_pegado.value);
    }
}