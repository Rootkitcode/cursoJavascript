/**Los objetos son usados para almacenar colecciones de varios datos
 *  y entidades mas complejas asociados a un nombre de clave */

//ejemplo de objeto vacio

// let user = new Object(); //sintaxis del constructor de objetos
// let user2 = {}; //sintaxis de objeto literal

let usuario = { //objeto literal
    name: "Darwin", //en la clave "name" se almacena el valor "Darwin"
    edad: 36 //en la clave
    
    
};
console.log(usuario.name); //Darwin
console.log(usuario.edad); //36
console.log(usuario.admin = true); //true

//ejemplo 2

let persona = {
    name: "jose",
    age: 25,
    "le gustan los pajaros": true
};

console.log(persona.name); //jose
console.log(persona.age); //25

//ejemplo con string

let alguien = {};
//asignando valores a las claves
alguien["aves"] = true;

//obtener valores de las claves
console.log(alguien["aves"]); //true


//eliminar claves
delete alguien["aves"];

//ejemplo con key

let animal = {
    alias: "pajaro",
    edad: 2,

};
let key = prompt("¿que te gustaria saber acerca de las aves?", "alias");

//tenemos acceso por medio de una variable
console.log( animal[key] ); //pajaro



