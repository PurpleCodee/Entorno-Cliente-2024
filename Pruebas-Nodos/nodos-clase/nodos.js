window.onload = function () {
    let boton1 = document.getElementsByTagName("input")[0];
    let boton2 = document.querySelector("input[type='button']")[1]
    let boton3 = document.getElementsByTagName("input")[2];

    //funcion de boton1
    boton1.onclick = function () {
        //1 creo nodo nuevo
        let nuevo = document.createElement("p");
        //2 (opcional) Atributo
        nuevo.setAttribute("class", "parra");
        //3 Creamos nodo texto
        let texto = document.createTextNode("Soy el nuevo parrafo y me llamo Miguel");
        //4 Engacho el nodo texto al nuevo nuevo nodo
        nuevo.appendChild(texto);
        //5 Asignar un padre nuevo
        let papi = document.querySelector("section");

        let bro = document.querySelectorAll("div")[2];

        papi.insertBefore(nuevo, bro);
        //papi.appendChild(nuevo);

        //desabilito boton
        this.disabled = true;
        boton2.disabled = false;
    }


    //borrar elementos
    boton2.onclick = function () {
        let victima = document.getElementsByClassName("parra")[0];
        //manera de que funcione siempre es preguntar quien es el padre niño dime quien es tu padre
        let papi = victima.parentNode;

        //y para borrar el hijo
        papi.removeChild(victima);

        //this.disabled = true;//desactivo el boton
        //boton1.disabled = false

    }

    boton3.onclick = borrar;


    function borrar() {
        //si mato a un hijo necesito apuntar al hijo y al padre
        let papi = document.querySelector("section");
        //let victimas = document.querySelectorAll("selection div");//si no se quien es el padre quito el selection

        let victima = papi.children;//no quenes son los hijos y de esta manera me da un htmlColection de todos los hijos del padre(NO ESTA EN APUNTES)

        //ASI FUNCIONA Y ESTA PERFECTO
        for (let i = 0; i < victimas.length; i++) {
            let papi = victimas[i].parentNode;//forma correcta
            papi.removeChild(victimas[i]);

        }
    }
}