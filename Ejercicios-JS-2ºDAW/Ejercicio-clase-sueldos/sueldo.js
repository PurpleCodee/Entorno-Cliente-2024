/**Ejercicio tenemos un array let brutos = [1000,1300,1500,2000,2200,2500,3000];
 * 
 * a) Monstrar por consola todos los sueldos uno debajo del otro
 * b) Aplicar el 15% de retencion a cada sueldo y devolver otro array (netos) con los nuevos valores
 * c) Crea el array fiscalAlto y guarda en el los sueldos mayores a 1935
*/

//Tengo mi array de brutos
//Son globales
let brutos = [1000,1300,1500,2000,2200,2500,3000];
let netos = [];
let fiscalAlto = [];

function apartadoA(){
    //Con esta funcion muestro todos los sueldos hacia abajo en vertical
    for(let i = 0; i < brutos.length; i++){
            console.log(brutos[i]);
    } 
      
}
//llamo a mi función
apartadoA();

console.log("---------------------------------------------------");

function devolverSueldoNeto(){
    for(let i = 0; i < brutos.length; i++){
        
        netos.push(brutos[i] - (brutos[i] * 15/100));
        console.log(netos[i]);

    }   
}
devolverSueldoNeto();

console.log("--------------------------------------------------");

function guardarFiscalAlto(){

    for(let i = 0; i < brutos.length; i++){
        if(brutos[i] > 1935){
            fiscalAlto.push(brutos[i]);
        }
    }  
    fiscalAlto.forEach(function(brutos){
        console.log(brutos);
    });
    
}
guardarFiscalAlto();
console.log("--------------------------------------------------");
