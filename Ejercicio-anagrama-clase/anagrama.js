
//--------------------------------------EJERCICIO 1------------------------------------------------------
//1º Función que devuelve true si hay algun elemento repetido. y False si todos los elementos son diferente
//La funcion recive una matriz

function comprobarElementos(matrizElementos){
    let acumulados = [];

    for(let i = 0; i < matrizElementos; i++){
        matrizElementos = [];//la dejo vacia

        for(let j = 0; j < matrizElementos; j++){
            if(acumulados.includes(matriz[i][j])){
                return true;
            }
            acumulados.push(matrizElementos[i][j]);
        }
    }
   return false;
    //devuelve false si todos los elementos son diferentes
}


//--------------------------------------EJERCICIO 2------------------------------------------------------
//2º Anagrama (amor y roma) Función que recibe dos Cadenas y devuelve true si son anagramas o false si no lo son.

function comprobarAnagrama(cadena1,cadena2){
    let c1 = cadena1.split("");
    let c2 = [cadena2];

    c1 = c1.join(c1.sort());
    c2 = c2.join(c2.sort());

    if(c1 === c2){

        return true;
    }
    return false;

}