/**Define un array con los siguientes colores: red, yellow, green,
white, blue, brown, pink y black. A continuación crea un generador aleatorio de
banderas:

1. Se pide el numero de franjas de va a tener la bandera (entre 1 y 5).
2. El programa obtiene de forma aleatoria 5 colores del array.
3. Usando document.write, crea una tabla de una fila y tantas columnas como
colores tenga la bandera generada. Usa el atributo style para rellenar el fondo de
cada celda del color adecuado.

a) En el paso 2 se pueden repetir colores en la bandera.
b) en el paso 2 NO se pueden repetir colores en la bandera.
c) En el paso 2 se pueden repetir colores mientras no sean consecutivos (es decir, no
puede haber dos franjas juntas con el mismo color) */

//declaro un array de colores
let arrayColores = ["#FF0000", "#0000FF",  "#008000", "#FFFF00", "#FFA500", "#800080", "#000000",  "#FFFFFF",  "#808080", "#FFC0CB"];
let franjas = 0;
let coloresAleatorio = [];
let copiaColores = ["#FF0000", "#0000FF",  "#008000", "#FFFF00", "#FFA500", "#800080", "#000000",  "#FFFFFF",  "#808080", "#FFC0CB"]; //copia

function crearFranjas(){
    
    do{
        //pido el numero de franjas de la bandera
        alert(franjas = prompt("Dime un numero entre el 1 y el 5: ", ""));
       
    }while(franjas < 1 || franjas > 5);
}
crearFranjas()

function generarColoresAletorios(opcion){

    switch (opcion) {

        case 'a'://Repito colores

        for(let i = 0; i < franjas; i++){
            let indiceAleatorio = Math.floor(Math.random() * arrayColores.length);//me da un numero entre 0 y 5
            coloresAleatorio.push(arrayColores[indiceAleatorio]);//meto en colores aleatorios todos los que se pueden repetir de manera aleatoria indice aleatorio
        
        }
        break;
        //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

        case 'b'://no va a repetir colores

        let copiaColoresB = ["#FF0000", "#0000FF",  "#008000", "#FFFF00", "#FFA500", "#800080", "#000000",  "#FFFFFF",  "#808080", "#FFC0CB"];//Creo una copia del array original
        for(let i = 0; i < franjas; i++){
           //repito practicamente lo mismo pero con el arrayB
           let indiceAleatorio = Math.floor(Math.random() * copiaColoresB.length);
            coloresAleatorio.push(copiaColoresB[indiceAleatorio]);

            // Elimina el color seleccionado
            copiaColoresB.splice(indiceAleatorio, 1); //elimino uno para que asi no se repita
        }

        break
        //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

        case 'c': // c) No se pueden repetir colores consecutivos

        let indiceAleatorioC;//otro indice aleatorio para C
        for (let i = 0; i < franjas; i++) {
            do {
                indiceAleatorioC = Math.floor(Math.random() * arrayColores.length);
            } while (coloresAleatorio.length > 0 && arrayColores[indiceAleatorioC] == coloresAleatorio[coloresAleatorio.length - 1]); // Verifica que el color no sea el mismo que el anterior
            
            coloresAleatorio.push(arrayColores[indiceAleatorioC]);
        }
        break;

    default:
        alert("Opción no válida."); // Manejo de opción inválida

    }
    
    return coloresAleatorio;

}

/**CREO LAS BANDERA */
// Seleccionar una opción para generar los colores
let opcion = prompt("Selecciona una opción: a) Se pueden repetir colores, b) No se pueden repetir colores, c) No se pueden repetir colores consecutivos", "a");

document.write("<table border='1'><tr>");

let coloresSeleccionados = generarColoresAletorios(opcion);


// Crear cada columna con su respectivo color de fondo
for (let i = 0; i < coloresSeleccionados.length; i++) {
    document.write("<td style='background-color:" + coloresSeleccionados[i] + "; width:100px; height:100px;'></td>");
}

document.write("</tr></table>");

