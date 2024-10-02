/** El ácido desoxirribonucleico, ADN, es la principal molécula de
almacenamiento de información en los sistemas biológicos.
Está compuesto por cuatro bases de ácido nucleico: guanina ("G"), citosina ("C"), adenina ("A") y timina ("T").

El ácido ribonucleico, ARN, es la principal molécula mensajera de las células. El ARN
difiere ligeramente del ADN en su estructura química y no contiene timina. En el ARN,
la timina se sustituye por otro ácido nucleico, el uracilo ('U').

Cree una función que traduzca una cadena dada de ADN a ARN.

Por ejemplo:
Si se introduce la cadena GCAT, a salida debe ser GCAU

Si se introduce la cadena GCATCGTA, a salida debe ser GCAUCGUA

La cadena de entrada puede tener una longitud arbitraria, incluso puede estar vacía. Se
garantiza que toda cadena de entrada es válida, es decir, que cada cadena de entrada
sólo estará formada por 'G', 'C', 'A' y/o 'T' en cualquier orden.*/

//creo unA CADENA con una cadena que contenga GCAT

let cadenaAdn = "GCCTAT";
let nuevaCadena;
function convertirAdn(){
    //recorro la cadena para encontrar la letra que tengo que cambiar para que sea ARN
    for(let i = 0; i < cadenaAdn.length; i++){
        //si la cadena incluye algunas de las letras GCAT entonces en la posicion que se encuentre la T colocare una U
        if(cadenaAdn.includes('G') || cadenaAdn.includes('C') || cadenaAdn.includes('A') || cadenaAdn.includes('T')){
            nuevaCadena = cadenaAdn.replace(/T/g, 'U');//REPLAZA LA T POR LA U
            console.log(nuevaCadena);
        }
    }
}
convertirAdn();

