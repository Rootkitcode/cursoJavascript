/**una diferencia entre objetos y primitivos es que los objetos son almacenados
 * y copiados "por referencia" en cambio los primitivos string, number, boolean son asignados y copiados 
 * como un valor completo
 */

let message = "Hola";
let phrase = message;


console.log(message);


let user = {
    name: "Juan",
};

console.log(user.name);


let user2 = {
    name2: "Diego",
};

let admin = user2;

console.log(admin.name2);


/**Comparaciones por referencia */

let a = {};
let b = a;

console.log(a == b); //true
console.log(a === b); //true


let c = {};
let d = {};

console.log(c == d); //false



/**Clonacion y mezcla de objetos */

let user3 = {
    name3: "Camilo",
    age: 30,
};

let clone = {}; //nuevo objeto vacio

for (let key in user3) {
    clone[key] = user3[key];
}

clone.name3 = "Pepe"; //cambiamos el dato del objeto
console.log(clone.name3);
