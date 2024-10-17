window.onload = function(){
let celda = document.getElementsByTagName("td");//accedo a los td de mi tabla que son mis celdas
    //recorro mis celdas
    
    for (let element of celda) {
        
    
        element.setAttribute("style", "background-color:white")
        element.onclick = function(){//esto es una funcion anonima

        comprobarColor(this);
        }
    }

        //cada vez que lke doy una vuelta al for lo dejo en blanco y le asigno el style
       
    
}

//compruebo el color una vez que la pagina a cargado ya estabn asignado el blanco
function comprobarColor(element){
    console.log("estoy entrando a la tumba")
    if(element.getAttribute("style") === "background-color: white"){
        console.log("HOLA");
        element.bgColor = "black";
    }

    /*let celdas = document.getElementsByTagName("td");

    //recorro mis celdas con un for of
    for(celda of celdas){

    }*/



    


}


