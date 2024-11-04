window.onload = function() {
    // Accede al botón "Añadir"
    let aniadir = document.getElementById("botonAnadir");
    
    // Asigna la función al evento "onclick" del botón
    aniadir.onclick = function() {
        // Pide al usuario un texto para el nuevo elemento
        let usuarioTexto = prompt("Dime una frase o palabra");
        
        if (usuarioTexto) { // Verifica que el usuario ingresó texto
            // Crea un nuevo elemento "li"
            let nuevo = document.createElement("li");
            nuevo.textContent = usuarioTexto; // Asigna el texto al "li"
            
            // Agrega el nuevo "li" al "ul" con id "lista"
            let lista = document.getElementById("lista");
            lista.appendChild(nuevo);
        }
    }
}
