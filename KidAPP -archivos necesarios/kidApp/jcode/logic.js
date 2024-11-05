let fondos = ["red","green","blue","yellow","orange","pink","lightblue","lightgreen"];
let ccolores = ["#00FF48","#D4478E","#FFD100","#0070FF","#7AAA83","#385B66","#ED91BF","#95AD95"];

window.onload = () => {
//Nota: Configuro las medidas del fondo.

    //1 - Creo nodo que va a contener el fondo.
    let divFondo = document.createElement("div");

    //2 - Configuro mi nuevo div con propiedades para que ocupe toda la pantalla.
    divFondo.setAttribute("style", `
        position: fixed; /*fijo para cubrir toda la ventana*/
        top: 0; /*Me aseguro de que el dondo se alinee con la pantalla*/
        left: 0;
        width: 100%; /*ocupo todo el ancho*/
        height: 100%;/*ocupo todo el alto*/
        z-index: 1000;/*lo pongo por encima de otros elementos*/
    `);

    //3 - Agrego el fondo a mi body (se dan las manitas).
    document.body.appendChild(divFondo);

    //4 - Inicializo un indice para cambiar los colores del fondo.
    let i_fondos = 0;

    //Nota: Realizo el evento para que cada vez que se haga click en la pantalla cambie el fondo.
    divFondo.onclick = () =>{
    //5 - Cambio el color del fondo cada vez que hago un click.
    divFondo.style.backgroundColor = fondos[i_fondos];

    //6 - Avanzo al siguiente color y si llego al final, vuelvo al principio.
    //Nota: avanzo secuencialmente de manera infinita desde el principio hata que llego al final
    i_fondos = (i_fondos + 1) % fondos.length;

    }
}
