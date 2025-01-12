window.onload = function () {
    //accedo a los elementos 
    let divColor = document.getElementById("colorDiv");
    let radioColores = document.getElementsByTagName("input");
    let listaColores = document.querySelector("select");



    for (const radio of radioColores) {
        radio.addEventListener("change", function () {
            if (radio.checked) {
                divColor.style.backgroundColor = radio.value;
            }
        });
    }

    listaColores.addEventListener("change", function () {
        if(listaColores.value !== ""){
            divColor.style.backgroundColor = listaColores.value;
        }
    });




}