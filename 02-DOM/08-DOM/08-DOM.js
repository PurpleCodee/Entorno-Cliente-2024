window.onload = function (){

    let fotosGatos = document.querySelector(".fotos img");

    fotosGatos.onmouseover=function(){
 
        fotosGatos.setAttribute("src","./fotos/foto1.jpg");
    }

    fotosGatos.onmouseout=function(){
 
        fotosGatos.setAttribute("src","./fotos/foto2.jpg");
}
}