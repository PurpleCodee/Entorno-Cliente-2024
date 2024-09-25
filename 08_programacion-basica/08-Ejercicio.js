/*Crea una función llamada countBy la cual recibirá dos números enteros
positivos: X e Y. Esta función debe devolver lo siguiente:
• Si alguno de los números es negativo devolverá un array vacío.
• Sino, devolverá con array con los Y primeros múltiplos de X empezando por el
1 (incluido)*/

let arrayVacio = [];
let arrayLleno = [];
let i = 0;

//Recorro y veces
function contBy(x,y){
    for(i=0; i < y; i++){//recorro mientras i sea menor que el numero y 

        if(x < 0 || y < 0){
            return(arrayVacio);
    
        }else{
            arrayLleno.push(x * (i+1));//calculo los multiplos empezando desde 1 con el push añado los multiplos al array
        }
        
    }
    return(arrayLleno);
}