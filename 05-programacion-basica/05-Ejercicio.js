/*Pedir dos valores numéricos con prompt y mostrar su suma, resta,
multiplicación, división y resto.*/

    let num1;
    let num2;

    num1 = parseInt(prompt("Dame numero 1: " ,""));//casteo el promp ya que como esta dentro de una cadena me lo detecta como si fuese un cadena y no suma sino que concatena
    num2 = parseInt(prompt("Dame numero2: ", ""));

    console.log("La suma de: " + (num1 + num2));

    console.log("La resta es: " + (num1 - num2));

    console.log("La multiplicacion es: " + (num1 * num2));

    console.log("La division: " + (num1 / num2));

    console.log("La resto: " + (num1 % num2));

