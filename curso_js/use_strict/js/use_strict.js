"use strict";
// num=3; // esto me va a generar un error por que no esta definida la variable

let num =3;
console.log(num);

//uso de constantes con mayusculas y guiones bajos
const COLOR_RED = "#F00";
let color = COLOR_RED;
console.log(color);

// ejemplo de expresiones de funcion ya no se utilizan
// pero nos podemos encontrar con estas

(function(){
    var message = "hello";
    console.log(message);
})();