//-------------------------------APUNTES DOM-------------------------------
/**
 * 💡 El DOM es como un mapa interactivo de una página web.
 * Cuando tu navegador carga una página, convierte el código HTML en un árbol de nodos (o cajitas)
 * que representan los elementos de la página, como párrafos, imágenes y botones.
 * 
 * Imagínatelo como un árbol genealógico donde:

-🌳 El nodo raíz es el <html> (el abuelito).
-🌱 Sus hijitos son <head> y <body>.
-👶 Dentro de ellos, hay más hijitos como <div>, <p>, <a>...

JavaScript puede entrar a este árbol y:

-🔍 Buscar nodos (elementos HTML).
-✨ Cambiar sus estilos, texto o atributos.
-🛠️ Crear o eliminar elementos.
 */

// Cómo accedemos al DOM en JS Aquí es donde empieza la magia.
// 🪄 Todas las formas de acceder a los elementos comienzan desde el objeto document,
// que es el puente entre JavaScript y la página web.

//-------------------------------FORMAS DE ACCESO-------------------------------

//🥇 1. Por ID:
let elemento = document.getElementById("miId");

//Ejemplo:
<div id="miId">¡Hola!</div>

let miDiv = document.getElementById("miId");
console.log(miDiv.textContent); // ¡Hola!

//🛠️ Cuándo usarlo: Cuando sabes que el elemento tiene un id único.
//--------------------------------------------------------------

//🥈 2. Por clases:
let elementos = document.getElementsByClassName("miClase");

//Ejemplo:
<div class="miClase">Hola 1</div>

let misDivs = document.getElementsByClassName("miClase");
console.log(misDivs[0].textContent); // Hola 1

//💡 Esto te devuelve una colección (como un array), así que puedes iterar:
for (let div of misDivs) {
    console.log(div.textContent);
  }

//--------------------------------------------------------------

//🥉 3. Por etiquetas: Para encontrar todos los elementos de una etiqueta (como todos los <p>):
let parrafos = document.getElementsByTagName("p");

//Ejemplo:
<p>Parrafo 1</p>

let misParrafos = document.getElementsByTagName("p");
console.log(misParrafos[1].textContent); // Parrafo 2

//--------------------------CON SELECTORES-----------------------

//💎 4. Con selectores (más flexibles): Aquí es donde empieza lo chulo, porque puedes usar selectores CSS.

//querySelector: Devuelve el primer elemento que coincida con un selector CSS:
elemento = document.querySelector(".miClase");

//Ejemplo:

<div class="miClase">Primero</div>

let primero = document.querySelector(".miClase");
console.log(primero.textContent); // Primero

//querySelectorAll: Devuelve todos los elementos que coincidan con el selector (como un arreglo).
elementos = document.querySelectorAll(".miClase");

let todos = document.querySelectorAll(".miClase");
todos.forEach((el) => console.log(el.textContent));

/**
 * 🌟 Por qué es útil:
 * 
 * Puedes hacer selecciones complejas, como:
 * #miId .miClase (un elemento con clase miClase dentro de un id específico).
 * div > p (los <p> directamente dentro de un <div>).
 */


/**
 * Por qué usamos estas formas de acceso
 * 🎯 La razón depende de lo que necesitas hacer:
 * 
 * getElementById: Es el más rápido y eficiente si sabes el id del elemento.
 * getElementsByClassName y getElementsByTagName: Son útiles si trabajas con muchos elementos similares.
 * querySelector y querySelectorAll: Son súper flexibles y funcionan con cualquier selector CSS, pero pueden ser un poquito más lentos.
 */

//Ejemplo práctico (todo juntito): Imagina que tienes esta página:
<div id="contenedor">
  <h1>¡Hola, mundo!</h1>
  <p class="texto">Soy un párrafo.</p>
  <p class="texto">Otro párrafo aquí.</p>
</div>

//Código JavaScript para manipular:
// Por ID
let contenedor = document.getElementById("contenedor");
contenedor.style.backgroundColor = "lightblue";

// Por clase
 parrafos = document.getElementsByClassName("texto");
for (let p of parrafos) {
  p.style.color = "red";
}

// Por selector
let primerParrafo = document.querySelector(".texto");
primerParrafo.textContent = "¡Modificado con querySelector!";

//------------------------------------------NODOS----------------------------------

//✨¿Qué es un nodo?
/**
 * Un nodo es la unidad básica del DOM.
 * Piensa que el DOM es un gran árbol genealógico, y cada elemento de la página (como el texto, los atributos, etiquetas <div>, etc.) es un nodo.
 * 
 * Hay varios tipos de nodos, pero los más comunes son estos tres:
 * 
 * 🌱 Nodos de elemento: Representan las etiquetas HTML como <div>, <p>, etc.
 * ✏️ Nodos de texto: Contienen el texto que hay dentro de las etiquetas.
 * 🎨 Nodos de atributos: Guardan los atributos de las etiquetas (como class, id, etc.)
 */

//Ejemplo visual de nodos:
<div id="miDiv" class="bonito">
  Hola, amiga 🌸
</div>

/**
 * Así se vería en el DOM como nodos! 🥳
 * 🌱 Nodo de elemento: <div>
 * 🎨 Nodo de atributo: id="miDiv" y class="bonito"
 * ✏️ Nodo de texto: "Hola, amiga 🌸"
 */

/**
 * Cómo trabajamos con nodos en JS
 * Acceder al DOM (los nodos):
 * Todas las interacciones con los nodos empiezan con el objeto mágico document, que es la raíz del DOM.
 */

//Ejemplo:
let miNodo = document.getElementById("miDiv");
console.log(miNodo); // 🌱 Nodo del elemento <div>


//Métodos para navegar entre nodos El DOM tiene métodos chulísimos para moverte entre nodos, como si pasearas por un árbol:

let hijos = miNodo.children; // Devuelve los nodos hijos (sin texto).

primero = miNodo.firstChild; // Devuelve el primer nodo (incluye texto).
let ultimo = miNodo.lastChild; // Devuelve el último nodo (incluye texto).

//💡 Si solo quieres elementos (no texto), usa:

let primerElemento = miNodo.firstElementChild;
let ultimoElemento = miNodo.lastElementChild;

//¿Quieres subir al nodo que lo contiene? Usa parentNode:
let padre = miNodo.parentNode;

//Hermanos (siblings): Ve a los nodos que están al mismo nivel:
let hermanoAnterior = miNodo.previousSibling; // Nodo anterior.
let hermanoSiguiente = miNodo.nextSibling; // Nodo siguiente.

//Para elementos solamente:
let elementoAnterior = miNodo.previousElementSibling;
let elementoSiguiente = miNodo.nextElementSibling;


//------------------------------CREAR, MODIFICA Y ELIMINAR NODOS----------------------------
//Crear un nodo nuevo:
let nuevoParrafo = document.createElement("p"); // 🌱 Crea un nodo de elemento <p>
nuevoParrafo.textContent = "¡Hola, soy nuevo!"; // ✏️ Nodo de texto.

//Luego lo "pegas" donde quieras usando:
document.body.appendChild(nuevoParrafo); // Añade el nodo al <body>.


//Modificar un nodo existente: Cambiar texto:
miNodo.textContent = "Texto actualizado 🌟";

//Cambiar atributos:
miNodo.setAttribute("class", "superBonito");

//Eliminar un nodo:
miNodo.remove(); // ¡Adiós nodo!