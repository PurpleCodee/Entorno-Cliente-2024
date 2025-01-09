//---------------------------------APUNTES FORMULARIOS-------------------------------
//En la etiqueta form tenemos method= ""  y action= ""
//En la etiqueta button y la input --> enviamos informacion

/**
 * En el formulario en JS se valida y se accede al elemento del Arbol de las siguientes formas
 * 
 * 1. d.getTagName/querySelector
 * 2. document.form
 * 3.document.forms[0]
 * 
 */

//-----------------------------------INPUT TYPE----------------------------------------
<input type = "text password"></input>; //son campos de texto 
/**
 * Los puedo bloquear con maxlength = 3 (solo caben 3 letras)
 * Los puedo bloquear con un modificador como --> disable
 * Value --> muy importante todo lo que recogemos del formulario lo recogemos del value
 */

//---------------------------Como accedo al formulario--------------------------------
/**
 * 1. d.get/d.querySelector
 * 2.formu.adri X en deshuso
 * 3.form.elemento[0]  <--- adri
 */

//Accedo de la siguiente manera --> 
let ele; // = al elelmento
ele.maxlength
ele.id
ele.value

//------------------------METODOS/EVENTOS PARA FORMULARIOS EN JS---------------------
ele.select();// -->
ele.blur();// -->
ele.focus();// -->
//---------------------
onblur// -->
onfocus// -->

//-----------------------------BOTONES-----------------------------------------------
/**
 * Tipos de botones en html/js
 * 1. button
 * 2. input type= submit, reset, button
 * - submit -> Envia la indormacion
 * - reset -> Pone el formulario con los valores por defecto
 * - button -> Esta libre para utilizarlo
 */

// Los botones o inputs tienen name= "" id= "" class= "" VALUE = ""  <--- El value es muy importante

//-----------------------------METODOS PARA LOS BOTONES-------------------------------
ele.click() //-->
ele.blur() // -->
ele.focus()// -->

//----------------------------BOTONES-------------------------------------------------
/**
 * Los input type= "checkbox" --> son los cuadraditos y puedo marcar los que quieraq o ninguno o todos
 * Sus propiedades --> name=""  id=""  class="" disable= "" value= ""  <-- El value si es 1 es el dato que recivo y no tiene nada que ver con el html
 */

//---------------------------METODOS PARA CHECKBOX-----------------------------------
ele.checked() //-->
ele.defaultChecked() //--> 
//El checked se cambia en el html como FALSE o como TRUE, si quiero que se marque o que no se marque

/**
 * Los input type= "radio" --> Solamente se puede elegir uno y ya no se puede desmarcar hasta que seleciono otro,
 * y es MUY IMPORTANTE que todos tienen que tener el mismo name --> me da un array si hay 3 botones radio seria [0] [1] [2]
 */
ele.checked() //-->
ele.defaultChecked() //--> 
ele.length() //--> 
//------------------------SELECT---------------------------------------------------------
//Los select son una lista de desplegables 
/**
 * <select name="felicidad">
 * 
 * <option>Ansiedad</option>
 * option>Tristeza</option>
 * option>Soledad</option>
 * 
 * </select>
 * //por defecto el el html aparece el primer option --> si quiero que aparezca uno en concreto utilizo el select1
 * 
 * Para acceder al select lo accedo como si fuese un array felicidad.option[1]  felicidad.selectIndex
 * ele.length --> me devuelve la cantidad de options
 */

//  Cuales son las propiedades de option 
/**
 * aqui van cosas mirar en los pauntes de Jaime
 */

//------------------------------------------TEXT AREA---------------------------------

/**
 * El textarea tiene --> <textarea name="content"> --> no tiene value el value es lo que hya dentro
 */
//-------------------METODOS MUY MUY IMPORTANTES DE FORMULARIO------------------------

formu.submit();
formu.reset();

if(noerrores){
    formu.submit();
}


//---------------------APUNTES FORMULARIOS-------------------------JAIME 2 PARTE
