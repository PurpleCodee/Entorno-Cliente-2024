
window.onload = function () {
    //timer
    //setInterval
    //Se debe de capturar lo que devuelve
    //Cuando llamo a una funcion puedo poner los parrentesis o no

    document.getElementsByTagName("button")[0].onclick = function () {
        let frase = "";
        let contador = 0;

        let timer = setInterval(function () {
            let dedo = document.querySelector("div");
            contador++;
            dedo.innerText = contador;

        }, 500);

        //lo desabilito
        this.disabled = true;
    }
    document.getElementsByTagName("button")[1].onclick = function(){

    }


    //El setTimeOute similar a cuando tomamos una foto con temporizador
    clearTimeout
    

};

