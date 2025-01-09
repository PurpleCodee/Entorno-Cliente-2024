window.onload = function(){
    
    /*

    let formu = document.querySelector("form");
    //valor del dni
    let dni = formu.querySelector("input[name='datoDni']");
    //valor del Nombre
    let nombre = formu.querySelector("input[name='datoNombre']");
    //valor del Apellido
    let apellido = formu.querySelector("input[name='datoApellidos']");
    //valor de la fecha de nacimiento
    let fechaNacimiento = formu.querySelector("input[name='datoFecha']");
    //valor web
    let web = formu.querySelector("input[name='datoWeb']");
    //valor contrsena
    let contrasena = formu.querySelector("input[name='datoContrasena']");

     */

    // Accediendo al formulario
    let formu = document.querySelector("form");
    let enviar = document.querySelector("input[name='botonEnviar']");
    let resetear = document.querySelector("input[name='botonReset']");

    // Accediendo a los campos del formulario usando form.elements --> De esta manera se haccede al name, solo al name
    let { datoDni, datoNombre, datoApellidos, datoFecha, datoWeb, datoContrasena } = formu.elements;

    //---------------RESETEAR FORMULARIO------------------
    resetear.addEventListener("click", (event) =>{
        formu.reset();
    },false);

    //valido en el boton enviar - asocio el listener al boton click
    enviar.addEventListener("click", (event) =>{
        event.preventDefault();
        //booleanito
        let esValido = true;

        //Funcion validar fechas
        function validarFecha(dia,mes,anio){
            //verifico si el año esta en el rango
            if(anio < 1923 || anio > 2025){
                return "El año debe de estar entre 1923 y 2025";
            }
            //virifico el rango del mes permitido
            if(mes < 1 || mes > 12){
                return "El mes debe de estar entre 1 y 12"
            }
            //Verifico si el di esta en el rango permitido
            let diasEnMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            //Compruebo si el año es bisisto
            if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
                diasEnMes[1] = 29; // Cambiar febrero a 29 días
            }
        
            if (dia < 1 || dia > diasEnMes[mes - 1]) {
                return `El día debe estar entre 1 y ${diasEnMes[mes - 1]} para el mes seleccionado.`;
            }
            return "Fecha válida.";
        }
        //------------------VALIDACION DE DNI-----------------
        //Si los campos estan vacios salta error
        if(datoDni.value === ""){
            alert("El campo no puede estar vacio");
            datoDni.style.border = "2px solid red";
            esValido = false;

        } else {
             //Se extra el primer caracter y los numeros
             let primerCaracter = datoDni.value.charAt(0);
             let numeros = datoDni.value.slice(1);

             //Veridico si la primera letra es mayuscula
             if(primerCaracter < 'A' || primerCaracter > 'Z'){
                alert("El DNI debe de comenzar por una letra mayuscula");
             } 
             else if(numeros.length !== 8 || isNaN(numeros)){
                alert("El DNI debe de contener 8 numeros");
             }
             //si es valido
             else{
                alert("El DNI es valido");
                datoDni.style.border = "";
                esValido = true;
             }
        }

        //------------------VALIDACION DE NOMBRE-----------------
        if(datoNombre.value === ""){
            alert("El campo no puede estar vacio");
            datoNombre.style.border = "2px solid red";
            esValido = false;
        } else {
            //Divido el nombre y las palabaras
            let palabras = datoNombre.value.trim().split(" ");
            let primeraLetra = datoNombre.value.charAt(0).toUpperCase();
            //Valido que haya entre 1 a 2 palabara
            if(palabras.length === 0 || palabras.length > 2){
                alert("Solo se puede tener maximo 2 nombres");
                esValido = false;
            } 
            else if(primeraLetra < 'A' || primeraLetra > 'Z'){
                alert("La primera letra del nombre debe de ser en mayuscula");
                esValido = false;
            } 
            //si todo esta correcto
            else {
                alert("El nombre o los nombres son validos");
                datoNombre.style.border = "";
                esValido = true;
            }
            
        }
         //------------------VALIDACION DE APELLIDO-----------------
        if(datoApellidos.value === ""){
            alert("El campo no puede estar vacio");
            datoApellidos.style.border = "2px solid red";
            esValido = false;
        } else {
            let palabaraApellido = datoApellidos.value.trim().split(" ");
            let primeraApellido = datoApellidos.value.charAt(0).toUpperCase();
            //Valido que haya una o dos palabras
            if(palabaraApellido.length < 1 || palabaraApellido.length > 2){
                alert("Debe de haber entre 1 o 2 apellidos");
            }
            else if(primeraApellido < 'A' || primeraApellido > 'Z'){
                alert("La primera letra del nombre debe de ser mayuscula :(");
            }
            else{
                alert("El apellido o los apellidos son validos :)");
                datoApellidos.style.border = "";
                esValido = true;
            }
        }
         //------------------VALIDACION DE FECHA-----------------
        if(datoFecha.value === "" ){
            alert("El campo no puede estar vacio");
            datoFecha.style.border = "2px solid red";
            esValido = false;
        } else {
            //Extraigo las fechas
            let partesFechas = datoFecha.value.split("-");
            let anio = parseInt(partesFechas[0], 10);
            let mes = parseInt(partesFechas[1], 10);
            let dia = parseInt(partesFechas[2], 10);

            let resultadoValidacion = validarFecha(dia,mes,anio);
            if(resultadoValidacion !== "Fecha valida. :)"){
                alert(resultadoValidacion);
                datoFecha.style.border = "2px solid red";
                esValido = false;
            } else {
                datoFecha.style.border = "";
                esValido = true;
            }
        }
         //------------------VALIDACION DE WEB-----------------
        if(datoWeb.value === "" ){
            esValido = false;
        } else {
            if(!datoWeb.value.includes("https://")){
                alert("La url introducida no es valida :(");
                esValido = false;
            }
            else {
                alert("La url introducida es valida :)");
                datoWeb.style.border = "";
                esValido = true;
            }
        }
         //------------------VALIDACION DE CONTRASENA-----------------
        if(datoContrasena.value === ""){
            //MostrarError(datoContrasena, "El campo  no puede estar vacio");
            datoContrasena.style.border = "2px solid red";
            esValido = false;
            if(datoContrasena.length < 8 ||datoContrasena.length > 12){
                alert("La contrasella debe de estar entre 8 y 12 caracteres");
                esValido = false;
            } else {
                alert("La contraseña es valida");
                datoContrasena.style.border = "";
                esValido = true;
            }
        }
        
        if(esValido){
            esValido = true;
            window.location.href = "./web_datosCorrectos.html";
        }
    });    
}