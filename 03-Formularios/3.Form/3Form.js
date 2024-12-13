window.onload = function(){
    //---------------------------PRIMERA OPCION CON BOTON-------------------------

    //let form = document.forms[0] , box1 = form.elements[0] , box2 = form.elements[1] , box3 = form.elements[2] , botonMostrar = form.elements[3];
    //let botonBorrar = form.elements[4] , areaTexto = form.elements[5];
    /*botonMostrar.onclick = () => {
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
    }*/

    //--------------------------------MEJORA SIN BOTON---------------------------------
    let form = document.querySelector("form");
    let checkboxs = document.querySelectorAll("input[type='checkbox']");
    let areaTexto = document.querySelector("textarea");

    for (let element of checkboxs) {
        element.addEventListener("click", function(){

            mostrar(element);

        });
    }

    
    function mostrar(element){
            if(element.checked){
                areaTexto.value += element.value+" "; 
            } else{
                if(element.checked == false){
                 areaTexto.value = areaTexto.value.replace(element.value+" ","");
                }
            } 
    }
}