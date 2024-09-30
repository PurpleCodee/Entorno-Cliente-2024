/**Usando el array de colores del ejercicio anterior, crea un script que
solicite 8 palabras al usuario y las almacene en otro array.
Ordena ese array (el del usuario) de forma que si aparecen colores del array de colores,
estos queden al principio del array y el resto de palabras al final. Muestralo por consola.

Ejemplo:
Array de palabras del usuario:
casa blue green orden brown bombilla bici pink
Array resultante:
blue green brown pink casa orden bombilla bici */

//variables globales
let colores = ["Rojo", "Azul", "Verde", "Amarillo", "Naranja", "Morado", "Negro", "Blanco", "Gris", "Rosa"];
let palabritas = [];

function pedirColores(){
    
    let i = 0;
   

    do{
        let palabras = prompt("Dime 8 palabras: ", "");

            palabritas.push(palabras);//estan todas las palabras

        i++;

    }while(i < 8);
}

function verificarPalabras(){
   
    let nuevecito = [];
    let basurita = [];

    for(let i = 0; i < palabritas.length; i++){

        let color = false;

        for(let j = 0; j < colores.length; j++){

            //le pregunto si la palabra es un color
            if(palabritas[i] === colores[j] ){

                color = true
                j = colores.length;//actualizo la j con el tmaño de colores para no seguir dando vueltas

            }
        }
        if(!color){
            basurita.push(palabritas[i]);

        }else{

            nuevecito.push(palabritas[i]);
        }
    }
    console.log(nuevecito.concat(basurita));

}