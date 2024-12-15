window.onload = function(){
    /*
    //Primero accedo al formulario
    let formu = document.querySelector("form");
    //accedo a los elementos del formulario
    let inputDolar = formu.elements[0];
    let inputResEuro = formu.elements[1];
    let botonConvertirDolares = formu.elements[2];

    let inputEuro = formu.elements[3];
    let inputResDolar = formu.elements[4];
    let botonConvertirEuros = formu.elements[5];

    botonConvertirDolares.addEventListener("click", convertirDolares);
    botonConvertirEuros.addEventListener("click", convertirEuros);

    function convertirDolares(event){
        event.preventDefault();//Evita que se envie el submit
        if(!isNaN(inputDolar.value)){
            //hago la operacion
            inputResEuro.value = inputDolar.value * 0.83;
        } else {
            alert("Solo admite numeros");
        }
    }

    function convertirEuros(event){
        event.preventDefault();
        if(!isNaN(inputEuro.value)){
            //hago la operacion
            inputResDolar.value = inputEuro.value * 1.05 ;
        } else {
            alert("Solo admite numeros");
        }
    }
        */
    let formu = document.querySelector("form"),
    valor = formu.querySelector("input[name='introducirValor']");
    lista = document.querySelector("select"),
    inputRes = formu.querySelector("input[name='resultadoConversion']");

    formu.addEventListener("submit", (event) => {
        event.preventDefault();

        let opcionesSelect = lista.value;

        if(opcionesSelect === "Dolares"){
            inputRes.value = valor.value * 0.83;
        } else if(opcionesSelect === "Euros"){
            inputRes.value = valor.value * 1.05;
        } else {
            inputRes.value = "0.00";//no coincice ninguna opcion
        }
    });
}