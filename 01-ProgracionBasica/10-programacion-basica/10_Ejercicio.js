/**Escriba una función que reciba dos arrays y devuelva un nuevo array con
los elementos que solo aparecen una vez en total (ya sea en el primer o en el segundo
array). El orden debe ser: primero los que están en el primer array y luego los que están
en el segundo.

Ejemplos:
[1, 2, 3, 3] y [3, 2, 1, 4, 5]) ==> [4, 5]
["Ray", "Jose", "Dani"] y ["Dani", "Jose", "Ivan"]) ==> ["Ray","Ivan"]
[77, "ciao"] y [78, 42, "ciao"]) ==> [77, 78, 42]
[1, 2, 3, 3] y [3, 2, 1, 4, 5, 4]) ==> [4,5] */

//Creo una funcion que recibe 2 arrays
function recibirArrays(_array1,_array2){

    //nuevo array que voy a devolver
    let nuevoArray = [];
    //declaro un contador tara contar cuantas veces aparece un elemento repetido
    let cont = 0;

            for (let i = 0; i < _array1.length; i++) {
                let cont = 0; // Contador para el elemento actual
        
                // Contar apariciones en _array1
                for (let j = 0; j < _array1.length; j++) {
                    if (_array1[i] === _array1[j]) {
                        cont++; // Aumentar contador si hay coincidencia
                    }
                }
        
                // Contar apariciones en _array2
                for (let k = 0; k < _array2.length; k++) {
                    if (_array1[i] === _array2[k]) {
                        cont++; // Aumentar contador si hay coincidencia
                    }
                }
        
                // Si el contador es 1, el elemento es único
                if (cont === 1) {
                    nuevoArray.push(_array1[i]); // Añadir al nuevo array
                }
            }
            
            /**>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
        
            // Comprobar elementos únicos en _array2
            for (let i = 0; i < _array2.length; i++) {
                let cont = 0; 
        
                // Contar apariciones en _array2
                for (let j = 0; j < _array2.length; j++) {
                    if (_array2[i] === _array2[j]) {
                        cont++; // Aumentar contador si hay coincidencia
                    }
                }
        
                // Contar apariciones en _array1
                for (let k = 0; k < _array1.length; k++) {
                    if (_array2[i] === _array1[k]) {
                        cont++; // Aumentar contador si hay coincidencia
                    }
                }
        
                // Si el contador es 1 y no está ya en nuevoArray, añadir
                if (cont === 1 && !nuevoArray.includes(_array2[i])) {
                    nuevoArray.push(_array2[i]); // Añadir al nuevo array
                }
            }
        console.log(nuevoArray);
      
    }


let _array1 = ["Ray", "Jose", "Dani"];
let _array2 = ["Dani", "Jose", "Ivan"];

recibirArrays(_array1,_array2);