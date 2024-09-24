/*Crear una página web con dos botones. Uno hace un alert normal, y el otro
hace un document.write ¿Que sucede al usar document.write?.*/

function button_alert_normal() {
    alert("MIAUUUUU ALERTA NORMAL");

}

/*La funcion document.write me permite escibir el contenido de los argumentos en la pagina mientras que esta esta cargando*/
/*Una vez que el contenido se ha cargado por completo la que habia anteriormente se remplaza*/
function button_alert_write() {
    document.write("Hola buenas tardes el electricista me va ha cortar la luz :3");

}