//como funciona la Asincronia --> Interesante utilizar mejor el metodo  domContent.loaded
//window.onload = function () {
    //Asincronia
    /*setTimeout(()=>{
        console.log("Pidiendo cafe...");
    },9000)

    */

//}

let pedido = new Promise(function(resolve,reject){
    if(parseInt(Math.random()*3+1) == 3){
        reject("Su pedido ha sido cancelado");

    }
    setTimeout(()=>{
        console.log("Pedido entregado");
    },9000)
})

//gestiono la promesa
pedido
    .then(function(respuesta){
        console.log(respuesta);
        //Si hago el return repuesta, creo otra promesa
        return respuesta+23;
    })

    .then(function(otra_respuesta){
        console.log(otra_respuesta);
    })

    .catch(function(error){
        console.log(error);
    })

    console.log("Le doy cambio a Mateo");
    console.log("Le vendo tabaco a la ambulancia gitana");