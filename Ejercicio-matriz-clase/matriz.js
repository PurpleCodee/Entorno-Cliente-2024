/**Crea un script que pida al usuario un numero entero positivo N mayor a 2.
Hay que controlar que el numero introducido sea correcto. Si no es así se volverá a
pedir.
A continuación debe crearse una matriz NxN rellena con los resultados de la tabla de
multiplicar de N (empezando en 1). Finalmente, muestra por consola la matriz “en
forma de matriz” */

let numero = 0, i = 0, j = 0;
let tablaMatriz = [];
let contador = 1;//

do{
    numero = parseInt(prompt("Dime un numero: ", ''));
    //isNaN me devuelve un booleano F si es un numero T si no es un numero

    if( numero > 2){
        //crea la matriz
        for(i = 0; i < numero; i++){
            tablaMatriz[i] = []; //la tabla/matriz esta vacia

            for(j = 0; j < numero; j++){
                //en esta parte es donde relleno la matriz
                tablaMatriz[i][j] = (numero * contador);
                contador++;
            }
        }

        //muestro la tabla de multiplicar
        tablaMatriz.forEach(function(tablaMatriz){
            console.log(tablaMatriz);
        });
        
        //mostrar la matriz fila for fila le doy la vuelta a la matriz
        /**3,12,12
         * 6,15,24
         * 9,18,27
         */


    }else{

        //no es un numero correcto
        console.log("El numero no es correcto")

        
    }

}while(numero < 2 || isNaN(numero))