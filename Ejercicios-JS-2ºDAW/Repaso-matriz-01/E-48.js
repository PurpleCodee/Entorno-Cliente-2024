/*48.- Sea el array relleno con las notas: 6,3,9,7,5,8,10,2,4 y 5
 Crea un programa que, a partir de ese array, muestre por pantalla la media aritmética de
las notas.*/

function mediaAritmetica(arrayNotas){
    //La media aritmetica se calcula sumando el valor de todas las notas y dividiendolo entre el total de las notas
    let sumaNotas = 0;
    let media = 0;
    for(let i = 0; i < arrayNotas.length; i++){

        sumaNotas+= arrayNotas[i];
        media = sumaNotas/arrayNotas.length;
    }
    console.log(sumaNotas);
    console.log(media);
}
arrayNotas = [6,7,8,9,5,7];
let miArray = mediaAritmetica(arrayNotas);

console.log(arrayNotas.join(" "));



