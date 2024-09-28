/**Crea un script que filtre un alista de nombres y devuelva otra lista solo
con los que son amigos tuyos.
Como eres una persona muy “especial”, tú solo eres amigo/a de aquellas personas cuyo
nombre se componga exactamente de 4 letras.

Ejemplo:
Entrada={Luis", "Estela", "Ángel", "Enya", "Jose Antonio"}
Salida = {"Luis", "Enya"}
Entrada = {"Joaquín", "Manuel", "Carlos"}
Salida = {}
Suponemos que los array son correctos y tienen nombres.
Importante: hay que respetar el orden de los nombres en la salida. */

/**PASOS A SEGIR PARA RESOLVER EL PROBLEMA
* Recorres el array de nombres.
* Calculas la longitud de cada nombre.
* Comparas esa longitud con una condición.
* Filtras los nombres que cumplen la condición.
* Guardas esos nombres en un nuevo array.
 */

let arrayNombres = ["Luis", "Estela", "Ángel", "Enya", "Jose Antonio"]; //tengo mi array con nombres

let amiguitos = []; //array vacio para guardar a mis amigos

let nombre4 = 0;

//utilizo un for para recorrer el array de mis amguitos
for(let i = 0; i < arrayNombres.length; i++){
    //En arrayNombres[i].length lo qe guardo es la longitud de cada nombre del array
    if(arrayNombres[i].length === 4){

        amiguitos.push(arrayNombres[i]);

    }
}
console.log(amiguitos);
