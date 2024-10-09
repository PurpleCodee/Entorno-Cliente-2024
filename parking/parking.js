/**
 * 24 plazas un array con 14 pequeñas y otro array con 10 grandes
 */


/**
 * Se asigna el vehiculo segun su tamaño teniendo en cuenta lo siguiente
 * vehiculo peque = 1 plaza peque primero --> si estan todas ocupadas ocupara una grande
 * vehiculo grande = 1 plaza grande --> todas ocupadas no puede aparcar
 * de todas las plazas ocupadas se ocupa la de menor numero
 */

function menuNova(){

    let opcion = 0;
    
    //Number mejor que parseInt 
    //Y para el indice se utiliza string template
    opcion = (Number(prompt(
        `"APARCAMIENTOS NOVA"
        "-------------------"
        ¿Opcion?
        1-> Aparcar Vehículo
        2-> Sacar Vehículo
        3-> Mostrar Aparcamientos
        4-> Salir`
    )));

    /**------------------------------------------ */
    switch (opcion){
        case 1:
            /**llamo a la funcion */
            aparcarVehiculo();
    
        break;
    
        case 2:
              /**llamo a la funcion */
        break;
    
        case 3:
              mostrarAparcamiento();
        break;
    
        case 4:
            alert("Saliendo del programa...");
            return; // Salimos del programa
        break;
    
        default:
        alert("Opción no válida.");

        break;
    }  
}

/**------------------------------------------ */

let grande = ['L','L','L','L','L','L','L','L','L','L'];
let pequeñas = ['L','L','L','L','L','L','L','L','L','L','L','L','L','L'];

function aparcarVehiculo(){
    let tamVehiculo = 0;
    tamVehiculo = prompt("Tamaño del vehiculo (G/P)?").toUpperCase();
    
    if(tamVehiculo === 'G'){
        //INTENTO APARCAR
        let i = 0;//declaro
        while(i < grande.length && grande[i] !== 'L'){

            i++;
        }
    
        if(i < grande.length){
            grande[i] = 'O'; //marco como ocupado
            alert("Vehiculo grande aparcado " + (i + 1));
        }else{
            alert("No hay espacio para vehiculos grandes");
        }

    }else if(tamVehiculo === 'P'){//SI ES IGUAL QUE P plazas pequeñas
        //INTENTO APARCAR PEQUEÑITOS
        let i = 0; //actualizo la i

        while( i < pequeñas.length && pequeñas[i] !== 'L'){
            //busco espacio libre en las pequeñas
            i++;
        }

        if(i < pequeñas.length){
            pequeñas[i] = 'O';
            alert("Vehiculo pequeño aprcado " + (i + 1));

        }else{
            let j = 0;
            //si no hya espacios pequeños busco en los espacios grandes

            while(j < grande.length && grande[j] !== 'L'){
                j++;//Busco el primer libre que haya
            }
            if(j < grande.length){
                grande[j] = 'O';
                alert("El vehiculo pequeño ha aparcado en una plaza grande " + (j + 1));
            }else{
                alert("Ya no queda espacios libres");
            }
        }
    }
 }

 /**----------------------------------------------------------------------------- */

 function mostrarAparcamiento(){
    let mostrarGrande = grande.join(", ");
    let mostrarPequeño = pequeñas.join(", ");

    alert("Estado de aparcamientos grandes: " + mostrarGrande);
    alert("Estado de aparcamientos pequeños: " + mostrarPequeño);

    menuNova();//vuelvo a mostrar el menu
 }
 menuNova();
 aparcarVehiculo();
