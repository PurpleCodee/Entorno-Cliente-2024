/*A través de un prompt, pide el nombre al usuario y saludalo con un alert de
la siguiente forma: “Bienvenid@ a mi página XXXXXX” (siendo XXXXXX el nombre
que ha introducido el usuario).*/

function pedir_nombre() {
    let nombre_usu;
    nombre_usu = prompt("Introduce tu nombre:"," ");
    alert("Bienvenid@ a mi página " + nombre_usu);
}