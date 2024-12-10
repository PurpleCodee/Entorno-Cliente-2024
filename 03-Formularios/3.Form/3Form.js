window.onload = function(){
    //Accedo al formulario
    let form = document.forms[0];
    //accedo a los chekbox
    let box1 = form.elements[0];
    let box2 = form.elements[1];
    let box3 = form.elements[2];
    let botonMostrar = form.elements[3];
    let botonBorrar = form.elements[4];
    let areaTexto = form.elements[5];
    
    botonMostrar.onclick = () => {
        //creo un array y meto todas las opciones
        let seleccionados = [];
        //cada ve que se haga clic lo que se haya en el el checkbox se copia en el textarea
        if(box1.checked){
            seleccionados.push(box1.value);
        }
        if(box2.checked){
            seleccionados.push(box2.value); 
        }
        if(box3.checked){
            seleccionados.push(box3.value); 
        }

        //muestro 
        if(seleccionados.length > 0){
            areaTexto.value = seleccionados.join("\n");
        } else {
            areaTexto.value = "No hay opciones selecionadas";
        }

    botonBorrar.onclick = () => {
        areaTexto.value = "";
    }
    }
}