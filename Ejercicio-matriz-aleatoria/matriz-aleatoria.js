/*
*Pido tam de la matriz al usuario(N) v

*Creo una matriz NxN con numeros 
aleatorios entre N y N*2

a) Obtener el numero  mayor de la matriz y mostrarlo

b) Mostrar la matriz por consola en filas y columnas

-Elementos separados por espacios
-Todos los elementos deben de ocupar lo mismo

c) Sumar todos los elementos de la matriz y mostrar por pantalla

d) Aplicar Fiz-Buzz en los elemntos de la matriz y devolver otra matriz con los cambios
*/

function main(){

    let tam = 0;
    let matrizAle = [];
    let numsAleatorio = 0;
    //Pido tam de la matriz al usuario(N)
    do{
        tam = (parseInt(prompt("Dime el tamaño: ", "")));

    }while(tam < 2 || (isNaN(tam)));

    //Creo una matriz NxN con numeros aleatorios entre N y N*2
   
    //para crear una matriz debo de recorrerla y imprimmirla con un buclecito
    for(let i = 0; i <  tam; i++){
        matrizAle[i] = [];
        cont = 0;
        for(let j = 0; j < tam; j++){
            numsAleatorio = Math.floor(Math.random() * (tam * 2 - tam+1)) + tam; //formula de random n - tam + tam
            matrizAle[i][j] = numsAleatorio;


        }
    }
     //muestro la tabla de multiplicar
     matrizAle.forEach(function(matrizAle){
        console.log(matrizAle);
    });
    console.log(matrizAle);
   
}

    
