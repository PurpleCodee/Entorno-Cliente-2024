window.onload = function(){
    formu = document.querySelector("form"),
    palabraOriginal = document.querySelector("input[name='palabraAnagrama']"),
    palabraAngrama = document.querySelector("input[name='anagramaPalabra']"),
    comprobar = document.querySelector("input[name='botonCompobar']");

    /*Un anagrama es una palabra que contiene - el mismo numero de letras
      Las mismas letras en diferente posicion
    */

    comprobar.addEventListener("click", (event) =>{
        event.preventDefault();
        let original = palabraOriginal.value.trim();
        let anagrama = palabraAngrama.value.trim();
       
        if(!original || !anagrama){
            alert("Porfis ompleta las falabras");
        }

        //Compruebo que sea un anagrama
        let esAnagrama = original.split('').sort().join('') === anagrama.split('').sort().join('');

        if(esAnagrama){
            alert("La palabra es un anagrama");
        } else {
            alert("No son anagramas");
        }
    });
}