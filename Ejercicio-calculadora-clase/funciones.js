  /*
    • La función recibirá como parámetro una cadena, la cual será un mensaje para el usuario.
    • Debe devolver el número que introduce el usuario.
    • Si el usuario no mete un numero correcto, vuelve a pedir el número.
    • Usa PROMPT para pedir el numero.*/

    

function recogerNumero(mensaje){
    let numUsu = 0;
    do{
        alert(numUsu = parseFloat(prompt(mensaje, "")));//casteito
        if(numUsu > 0){
            alert("correcto");
        }else{
            alert("Incorrecto");
        }

    }while(isNaN(numUsu));

    return numUsu;

}

/*
Crea funciones para sumar, restar, multiplicar y dividir.
• Todas van a recibir dos números como parámetros.
• Todas van a devolver el resultado de aplicar la operación correspondiente aplicada a los parámetros
*/

function sumar(num1,num2){
    let resSuma = 0;
    resSuma = num1 + num2;

    return resSuma;

}

function restar(num1,num2){
    let resResta = 0;
    resResta = num1 - num2;

    return resResta;
    
}

function multiplicar(num1,num2){
    let resMulti = 0;
    resMulti = num1 * num2;

    return resMulti;
    
}

function dividir(num1,num2){
    let resDiv = 0;
    resDiv = num1 / num2;
    if(num2 === 0){
        return 0;
    }else{
        return resDiv;
    }
}

/*Crea la función recogeOperación:
• Esta función debe pedir al usuario si quiere sumar, restar, multiplicar o dividir.
• Tú decides qué parámetros recibe y que valores devuelve
*/

function recogeOperacion(num1,num2){

    let opcion = 0;
    
    //Number mejor que parseInt 
    //Y para el indice se utiliza string template
    opcion = (Number(prompt(`¿Elige una opción?
        1-> Sumar
        2-> Restar
        3-> Multiplicar
        4-> Dividir`
    )));

    let resultado = 0;

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 switch (opcion){
    case 1:
        resultado = sumar(num1, num2);

    break;

    case 2:
        resultado = restar(num1, num2);
    break;

    case 3:
        resultado = multiplicar(num1, num2);
    break;

    case 4:
        resultado = dividir(num1, num2);
    break;

    default:
    alert("Opción no válida.");
}

    return resultado;
  
}

/*
Crea la función principal:
• Esta función no recibe ni devuelve nada.
• Esta función debe pedirle dos números al usuario, a continuación pedirle la 
operación a realizar y, finalmente, mostrar en un ALERT el resultado de la
operación.
*/

function principal(){
 let num1 = recogerNumero("Introduce un numero 1: ");
 let num2 = recogerNumero("Introduce un numero 2: ");
 console.log(num1);
 console.log(num2);
let miResultado = recogeOperacion(num1,num2);
alert("Resultado: " +  miResultado); 

}

