// var =  variables globales
// let = variables limitadas
//const = variables inmutables su valor no puede ser cambiado

var saludo = "hola darwin";
if (saludo) {
    var saludo = "Hola";
    console.log(saludo);
}
console.log(saludo);

let nombre = "Darwin";
let apellido = "Tusarma";
let edad = 36;

if (nombre) {
    let nombre = "alejandro";
    console.log(nombre);

}

console.log(nombre);
console.log(apellido);
console.log(edad);


const PI = 3.14;
console.log(PI);