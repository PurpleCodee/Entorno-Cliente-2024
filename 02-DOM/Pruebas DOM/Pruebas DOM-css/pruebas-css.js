window.onload = function(){
    let dedos = document.getElementsByTagName("p");

    let listaDivs = document.getElementsByTagName("div");

    //mirar KISS

    //como es un array lo recorro con un for
    for(let divito of listaDivs){
        //en divito tengo una refencia a cada div
        divito.onmouseover = function(){
            //alert("avisando"); --> para ver que funciona

            //para sacr una propiiedad del div 
            //let color = this.style.backgroundColor; --> me puedo ahorrar esta variable y hacerlo de la manera 

            //llego al cuerpo de esta manera y lo modifico (dentro de la etiqueta)
            document.body.style.backgroundColor = this.style.backgroundColor;



            //Saco los colores de cada elemento

            let estilos = window.getComputedStyle(this);
            let color = estilos.getPropertyValue("background-color");
            console.log(color);// me da el rgb

            //La forma de poner colores que sirve son estas y que vamos a utilizar
            document.body.style.setProperty("background-color", color); //--> ESTA
            //document.body.style.backgroundColor = this.style.backgroundColor; --> Y ESTA
        }
    }
}