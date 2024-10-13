function pruebita() {
    let resultado = 0;
    let euro = 0;
    do {
          
    euro = parseInt(prompt("Dime una cantidad de euros: "));

    } while (euro <= 0);
  

    if (euro > 0) {
        resultado = euro + 1.09; //el dolar vale 1.09
        alert("Conversion de euro a dolares si " + euro + " es " + resultado);

    }
}


function notas() {
    let suspenso = 0, aprobados = 0, notables = 0, sobresalientes = 0;//fuera del bucle para que no se reinicien MUY IMPORTANTE
    let nota = 0;
    do {

        nota = parseInt(prompt("Dime tus calidicaciones: "));

        if (nota >= 0 && nota <= 10) {

            if (nota < 5) {
                suspenso++;//cuento los suspensos
    
            } else if (nota >= 5 && nota < 7) {
                aprobados++;
    
            } else if (nota >= 7 && nota < 9) {
                notables++;
    
            } else if (nota >= 9) {
                sobresalientes++;
            }
   
    
        } else if (nota !== 0) {
            alert("Nota introducida no valida")
        }

    } while (nota > 0 && nota <= 10)//que me pida mientras que la nota sea mayor que cero si me pone un 0 para

    alert("Las notas son: " + "suspensos: " + suspenso + " aprobados: " + aprobados + " notables: " + notables + " sobresalientes: " + sobresalientes)

    
}

function ejercicio3() {

    //(0,5 punto) Pida al usuario números positivos hasta que el usuario meta un numero negativo. Mete esos números en un array.

    let numero = 0;
    let miArray = [];
    let suma = 0;


    //parte a
    do{
        numero = parseInt(prompt("Numero positivo: "));

        if(numero > 0 && !isNaN(numero)){
            miArray.push(numero);

        }else if(numero < 0){
            alert("fin de introducir numeros");

        }else{
            alert("El numero introducido no es valido");
        }

    }while(numero > 0 && !isNaN(numero));

    //parte b
    alert("Numeros introducidos: " + miArray.join(" "));

    //parte c

    for(let i = 0; i < miArray.length; i++){
        suma+= miArray[i];
    }

    alert("La suma de los valores es: " + suma);

    //apartado d
    let numero2 = 0;
    do{

        numero2 = parseInt(prompt("Introduce un numero positivo: "));

        if(numero2 > 0 && !isNaN(numero2)){
            alert("El numero 2 es positivo");

        }else{
            alert("Final de la entrada de numeros no es positivo")

        }

    }while(numero2 > 0 && !isNaN(numero2));

    //apartado e

    //Muestre por consola la posición de la primera y la última aparición del numero anterior en la lista de números. Si el numero no está, se indicará.
    let primeraPosicion = 0;
    let ultimaPosicion = 0;

    let numeroBuscado = 3;

    // Encontrar la primera aparición
    primeraPosicion = miArray.indexOf(numeroBuscado);

    // Encontrar la última aparición
    ultimaPosicion = miArray.lastIndexOf(numeroBuscado);


    // Verificar si el número está en la lista
if (primeraPosicion === -1) {
    console.log("El número " + numeroBuscado + " no está en la lista.");
} else {
    console.log("La primera aparición de " + numeroBuscado + " está en la posición: " + primeraPosicion);
    console.log("La última aparición de " + numeroBuscado + " está en la posición: " + ultimaPosicion);
}



}