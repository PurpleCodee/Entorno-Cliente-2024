window.onload = function(){ 
    let celdas = document.getElementsByTagName("td");//accedo a los td de mi tabla que son mis celdas 

    //Para la super mejora defino una lista de colores
    let colorines = ["white","green","purple","orange","palegreen","cyan"];

    // Función para comprobar y alternar el color
    function comprobarColor(element) {

        //guardo el indice actual
        let indiceActual = element.colorIndex;

        //avanzo al siguiente color
        let nuevoIndice = (indiceActual + 1) % colorines.length;

        //Asigno el nuevo color a la lista de mi lista que con colores actualizados
        element.style.backgroundColor = colorines[nuevoIndice];

        //Actualizo el indice de color de la celda
        element.colorIndex = nuevoIndice;//Guardo el indice dentro de la propiedad

        // Verifica el color de fondo actual de la celda
        /*if (element.style.backgroundColor === "white") {
            element.style.backgroundColor = "black"; // Si es blanco, cámbialo a negro
        } else {
            element.style.backgroundColor = "white"; // Si es negro, cámbialo a blanco
        }*/
    }

    for(let celda of celdas){
        //asigno el fondo inicial en blanco
        //---------------------------------------
        //celda.style.backgroundColor = "White";

        //Adigno el fondo inicial en el primer color que es el blanco
        celda.style.backgroundColor = colorines[0];

        //Inicio el indice a 0 que es el color blanco
        celda.colorIndex = 0;

        //asigno la funcion onClick para cambiar el color

        //Utilizo una funcion anonima
        celda.onclick = function(){
            comprobarColor(this);//paso el elemento actual a la funcion
        }
    }
  
}



