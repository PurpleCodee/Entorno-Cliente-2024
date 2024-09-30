function botonAño(){
    let año = parseInt(prompt("Dime un año: ", ""));
    let siglo = Math.ceil(año / 100);
    console.log(siglo);
    alert("El año introducido pertenece al siglo: " + siglo);
    //un siglo son 100 años y un siglo abarca desde el año 1 hasta el 100.
}