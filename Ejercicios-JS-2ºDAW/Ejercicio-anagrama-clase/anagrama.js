
//--------------------------------------EJERCICIO 1------------------------------------------------------
//1º Función que devuelve true si hay algun elemento repetido. y False si todos los elementos son diferente
//La funcion recive una matriz
console.log("------------------------------MATRIZ-------------------------------------");
function comprobarElementos(matrizElementos){
    let acumulados = [];

    for(let i = 0; i < matrizElementos.length; i++){

        for(let j = 0; j < matrizElementos[i].length; j++){
            if(acumulados.includes(matrizElementos[i][j])){
                return true;
            }
            acumulados.push(matrizElementos[i][j]);
        }
    }
   return false;
    //devuelve false si todos los elementos son diferentes
}
let matrizElementos = [
    [1, 2, 3],
    [5, 4, 6],
    [7, 8, 9] 
];
let resultado = comprobarElementos(matrizElementos);
console.log(resultado);

matrizElementos.forEach(fila => {
    console.log(fila.join(" "));
    
});

console.log("------------------------------ANAGRAMA-------------------------------------");
//--------------------------------------EJERCICIO 2------------------------------------------------------
//2º Anagrama (amor y roma) Función que recibe dos Cadenas y devuelve true si son anagramas o false si no lo son.

function comprobarAnagrama(cadena1,cadena2){
     // Convierto ambas cadenas en arrays de letras, luego las ordenamos y volvemos a unirlas
    let c1 = cadena1.split("").sort().join("");
    let c2 = cadena2.split("").sort().join("");

    if(c1 === c2){

        return true;
    }
    return false;

}
let cadena1 = "roma", cadena2 = "mora";
let anagrama = comprobarAnagrama(cadena1,cadena2);
console.log(anagrama);