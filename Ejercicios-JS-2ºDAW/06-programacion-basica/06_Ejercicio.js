/*Crea un script que pida al usuario un numero entero positivo N mayor a 0.
Hay que controlar que el numero introducido sea correcto. Si no es así se volverá a
pedir.*/

/*A continuación debe realizar lo siguiente:
a) Calcular los divisores del numero N y mostrarlos.
b) Calcular la suma de los cuadrados de los divisores obtenidos en el paso anterior
y mostrarla.
c) Indicar si esa suma es un cuadrado o no (con una frase por pantalla)*/
let n_positivo = 0;
let i;/*importante inicializar con un numero positivo*/
let sumaCuadrados = 0;
let miau = 0;
do {
    
    n_positivo = parseInt(prompt("Dame un número positivo: "));
    if (n_positivo > 0) {
        i = 1;  
        while (i <= n_positivo) { 
            if (n_positivo % i == 0) {
                console.log(i);
                sumaCuadrados+= i**2;//Elevo a la potencia se puede hacer con el Math.pow
            }
            i++;
        }
        console.log("la suma de los cuadrados es: " + sumaCuadrados);
        console.log("La suma es un cuadrado")
    }else{
        console.log("El número introducido no es mayor que 0.");
    }
} while (n_positivo <= 0);

