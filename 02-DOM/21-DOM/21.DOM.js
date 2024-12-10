window.onload = () => {
    //accedo al enlace
    let enlace = document.getElementsByTagName("a")[0];
    let nuevoDiv;

    //accion
    enlace.onmouseover = () => {
        //creo un nuevo nodo
        nuevoDiv = document.createElement("div");//creo un div

        //le añado a mi div atributos
        nuevoDiv.setAttribute("style", `background-color: #09e2f6;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            max-width: 300px;
            margin: 20px auto;
            text-align: center;
            float: right;`);

        //Tercer paso creo el texto
        let text = document.createTextNode("URL de este enlace: " + enlace.getAttribute("href"));

        //Cuarto paso enlazo el texto al nodo
        nuevoDiv.appendChild(text);

        //Quinto paso enlazo el nodo padre
        let papi = document.getElementsByTagName("body")[0];
        papi.appendChild(nuevoDiv);
       
    }

    enlace.onmouseleave = () => {
        if(nuevoDiv){
            //acedo al padre
            let papi = document.getElementsByTagName("body")[0];
            papi.removeChild(nuevoDiv);

        }

        
    }
}