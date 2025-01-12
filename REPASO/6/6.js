window.onload = function () {
    //accedo a los elementos
    let formu = document.querySelector("form");
    let checkboxes = formu.querySelectorAll("input[type='checkbox']");
    let select = formu.querySelector("select");

    for (let checkbox of checkboxes) {
        //evento listener - change escucha a los chekboxes
        checkbox.addEventListener("change", function () {
            if(this.checked){
                //si eta cheked creo un nodo de una opcion
                let opcion = document.createElement("option");
                opcion.value = this.value;
                opcion.textContent = this.value;
                select.appendChild(opcion);
            } else {
                for (let opcion of select.options) {
                    if (opcion.value === this.value) {
                        select.removeChild(opcion);
                    }
                }
            }
        });
    }
}