let lista = [1,2,3,4,5];
let otra = ['uno','dos ,true'];

let res = lista.concat(0,7,8,9);
res = lista.concat(otra);

res.push("flipao");
res.unshift("por delante");

let ultimo = res.pop();
ultimo = res.shift();
console.log(ultimo);/*por delante*/

res.reverse();

let salida = res.join("-");/**Buscar información */

console.log(salida);
console.log(res);

/**>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>< */

/*Fución normal* */
function holita(){
    console.log("miau");
}
holita();

/*Fución autoinvocada* */
(function(){
    console.log("guau");
})();

/*Funciones anonimas* */
function AnaElena(){
    console.log("pium")
}
let persi = AnaElena;
lista.some(AnaElena);/*some rellena alguno automaticamete lo que hay en la función* */
/*Devuelve un booleano si lo encuentra, every devuelve todos* */

/*Funciones flecha* */
const piumpium = () =>{
    console.log("miau");
}
piumpium();

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
let ok = res.some((edad)=>edad>-8);

console.log(ok);
console.log(res);

/*FOR EACH* */

res.forEach((ele,pos)=>{
    if(ele%2 == 0){
        return ele;

    }
    else{
        return pos;
    }
});

/*SPREAD OPERATOR [...*/

lista = [1, 2, 3, 4, 5];
otra = lista;
otra[0] = 97;

console.log(lista);
console.log(res);

/*Deconstruccion de los corchetes => ver en casa */