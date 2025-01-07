window.onload = function(){
    //guardo los valores de los elementos
    let formu = document.querySelector("form");
    let enviar = document.querySelector("input[name='botonEnviar']");
    //De la siguiente manera es solamente para el name
    let {datoNombre, datoCorreo, datoFecha, datoPersonaje, datoWeb, datoContrasena,datoContrasena_bien} = formu.elements;
    //guardo los valores de los select
    let listaAnimes = formu.querySelector("select");
    //guardo el valor de los radiobutton
    let generos = formu.querySelector("input[name='genero']");//cheked para comprobar


    //en el boton enviar pasa todo
    enviar.addEventListener("click", (event) =>{
        event.preventDefault();//muy importante para que le mande el formulario
        //booleanito
        let esValido = true;

        //funcion que limpia los errores
        function QuitarError(input){
            //lo que hace es crear un span que es el error
            let error = input.parentElement.querySelector("span");
            if(error){
                error.remove();
            }
        }

        //funcion para validar fechas
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

        //------------------VALIDACION NOMBRE--------------------1 o 2 palabras y no estar vacio
        if(datoNombre.value === ""){
            alert("El campo del nombre no puede estar vacio :(");
            datoNombre.style.border = "2px solid red";
            esValido = false;
        } else {
            let palabras = datoNombre.value.trim().split(" ");
            let primeraLetra = datoNombre.value.charAt(0).toUpperCase();
            //no son ni menos de una ni mas de 2 palabaras
            if(palabras.length === 0 ||palabras.length > 2){
                alert("No puede haber ni menos de un nombre ni mas de do nombres :(");
                esValido = false;
            }
            else if(primeraLetra < 'A' ||primeraLetra > 'Z'){
                alert("La primera letra del nombre debe de ser mayuscula");
                esValido = false;
            }
            else{
                alert("El nombre es correcto :)");
                QuitarError(datoNombre), datoNombre.style.border = "", esValido = true;
            }
        }
         //------------------VALIDACION CORREO--------------------contener @ y .com o .es no estar vacio
         if(datoCorreo.value === ""){
            alert("El campo de correo no puede estar vacio :(");
            datoCorreo.style.border = "2px solid red";
            esValido = false;
         } else {
            if(!datoCorreo.value.includes("@")){
                alert("El correo debe de contener el signo @ :(");
                esValido = false;
            }
            else if(!datoCorreo.value.includes(".es" || !datoCorreo.value.includes(".com"))){
                alert("El correo debe de contener una extension correcta");
                esValido = false;
            }
            else {
                alert("El correo es valindo :)"), QuitarError(datoCorreo);
                datoCorreo.style.border = "", esValido = true;
            }
         }
         //------------------VALIDACION WEB--------------------contener :https// y no estar vacio
         if(datoWeb.value === ""){
            alert("El campo de la web no puede estar vacio :(");
            datoWeb.style.border = "2px solid red";
            esValido = false;
         } else {
            if(!datoWeb.value.includes("https://")){
                alert("La wev no es valida debe de incluir https://  :(");
                esValido = false;
            }
            else{
                alert("La web es valida :)"), esValido = true, QuitarError(datoWeb);
                datoWeb.style.border = "";
            }
         }

         //------------------VALIDACION CONTRASEÑA--------------------
         if(datoContrasena.value === ""){
            alert("El campo de la contraseña no puede estar vacio :(");
            datoContrasena.style.border = "2px solid red";
            esValido = false;
         } else {
            if(datoContrasena.length < 8 || datoContrasena.length > 12){
                alert("La contraseña no puede ser ni menor que 8 ni mayor 12 :(");
                esValido = false;
            }
            else{
                alert("La contraseña es valida :)"), esValido = true, QuitarError(datoContrasena);
                datoContrasena.style.border = "";
            }
         }

         //------------------VALIDACION CONTRASEÑA-----nuevamene---------------
         if(datoContrasena_bien.value === ""){
            alert("El campo de la contraseña no puede estar vacio :(");
            datoContrasena_bien.style.border = "2px solid red";
            esValido = false;
         } else {
            if (datoContrasena.value !== datoContrasena_bien.value) {
                alert("Las contraseñas no coinciden");
            }
            else{
                alert("La contraseña es valida :)"), esValido = true, QuitarError(datoContrasena_bien);
                datoContrasena_bien.style.border = "";
            }
         }
         //------------------VALIDACION SELECT ANIMES----------que elija un anime----------
         if(!listaAnimes.value){
            alert("Tienes que leccionar una opcion"), listaAnimes.style.border = "2px solid red";
            esValido = false;
         } else {
            alert(`Has seleccionado: ${listaAnimes.value}`);
         }

    });
}