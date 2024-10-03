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
    let tam = 0
    do{
        tam = (parseInt(prompt("Dime el tamaño: ", "")));

    }while(tam < 2 || (isNaN(tam)));
    
    //Creo la matriz aleatoria
    let numsAleatorio = Math.floor(Math. random() * (tam * 2 - tam)) + tam;
    
    for(let i = 0; i < tam; i++){
        let matriz = [];

        for(let j = 0; j < tam; j++){
            matriz[i][j] = numsAleatorio;
        }
    }
    console.log(matriz[i]);

}
//llamo a mi pequeña funcion

    
