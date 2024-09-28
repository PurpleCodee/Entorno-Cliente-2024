/**Crea un script que pida al usuario un numero entero positivo N mayor a 2.
Hay que controlar que el numero introducido sea correcto. Si no es así se volverá a
pedir.
A continuación debe crearse una matriz NxN rellena con los resultados de la tabla de
multiplicar de N (empezando en 1). Finalmente, muestra por consola la matriz “en
forma de matriz” */

    let N = 0;//variable donde guardo el numero que me diga el usuario
    let i = 0;
    let j = 0;
    let tabla = []; //DECLARO UNA MATRIZ
    let count_mult = 1;
    /*Con un do while pido el numero mientras que no sea correcto lo sigo pidiendo
    compruebo que el numero introducido es positivo y mayor de 2*/

    do{
        N = parseInt(prompt("Dame un número positivo: ")); //pido al usuario el numero
        //compruebo que el numero el mayor
        if(N > 2){
            //En la condicion correcta voy a crear una matriz NxN
            //Para rellenaru una matriz necesito un bucle para filas
            for(i = 0 ; i < N; i++){
                tabla[i] = []; //digo que tabala de i esta vacia para posteriormente rellenarla

                for(j = 0 ; j < N; j++){
                    tabla[i][j] = (N * (count_mult)).toString().padStart(2,'0');//empiezo desde el 1
                    count_mult++;
                }
            }
            console.log("Matriz de " + N + "x" + N + ":");
            //para poder mostrar una matriz necesito recorrerla con un for
            for(i = 0; i < tabla.length; i++){
                //for (j=0; j < tabla.length; j++){
                console.log(tabla[i]);
                //}
                //console.log("\n")
            }

        }else{
            console.log("El numero no es correcto");
        }
    }while(N <= 2);//quiero que se repita mientras la i sea mayor que el numero
