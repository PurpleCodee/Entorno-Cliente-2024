//En una mesa se pueden sentar de 0 mesa vacia a 4 comensales como mesa llena

//0.1º Hay que tener en cuenta que el programa comienza pidiendo el numero de mesas que tiene el restaurante.

//0.2º Las mesas se cargan con valores aletorios entre 0 y 4 y muestra como quedan por pantalla inicialmente las mesas

//0.3º El programa sigue pidiendo comensales hasta que se introduce un numero negativo.

//1º Se le pregunta a los comensales ¿Cuantas personas son: ? si un cliente solicita una mesa para 5 o mas
//dira ¿Lo siento no admitimos grupos de 5 hagan grupos de 4? y volvera a preguntar.

//2º Para cada primer grupo nuevo que llega se busca la primera mesa libre con 0 comensales.

//3º Cada vez que se sientan nuevos clientes se muestra el estado de las mesas, los grupos ya echos de 4
// o menos no se pueden romper aunque haya huecos libres.--> No podemos separar a los que se conocen y mezclarlos con desconocidos


function gestionRestaurante() {

    //-------------------------------GESTIONO MESAS---------------------------------------------
    let mesas = 0;
    let arrayMesas = [];

    do {
        mesas = parseInt(prompt("Introduce el numero de mesas que va a tener el restaurante"));

    } while ((mesas <= 0 || mesas > 10) || isNaN(mesas));

    alert("El usuario ha metido un valor de: " + mesas);

    //Las mesas va a ser el tamaño de mi array de mesas
    arrayMesas = new Array(mesas);

    for (let i = 0; i < mesas; i++) {
        //lleno mi arrayMesas de numero aleatorios
        arrayMesas[i] = Math.floor(Math.random() * 5);
    }
    alert(arrayMesas);//Muestro mi array de mesas

    //-------------------------------GESTIONO COMENSALES--------------------a-------------------------

    //pido comensales
    let numComensales = 0;


    do {
        numComensales = parseInt(prompt("¿Cuantos comensales van a ser?"));

        if (numComensales >= 5) {
            alert("Lo siento no admitimos grupos de 5 o mas y son " + numComensales + ", hagan grupos de 4");

            continue;//pregunta de nuevo pero no ejecuta el resto del codigo

        } else if (numComensales > 0) {
            alert("Perfecto Son " + numComensales + " personas siganme a su mesa");
        }

        let mesaLlena = true;//la utilizo para saber si he encontrado la primera mesa vacia/la pongo aqui para actualizar el booleano

        //Para cada primer grupo nuevo que llega se le busca una mesa con 0 comensales

        for (let i = 0; i < arrayMesas.length; i++) {
            if (arrayMesas[i] === 0) {//si esta vacia
                arrayMesas[i] = numComensales;
                mesaLlena = false; //lo vuelvo true si he encontrado un 0
            }
        }

    //-------------------------------MUESTRO EL ESTADO DE LAS MESAS-----------------------------------------

    if (mesaLlena) {
        alert("Lo siento, ahora mismo no tenemos mesas disponibles.");
    } else {
        alert("El estado de las mesas en estos momentos es: " + arrayMesas.join(",")); // Muestra el estado de las mesas
    }

    } while ((numComensales <= 0 || numComensales >= 5) || isNaN(numComensales));



}


