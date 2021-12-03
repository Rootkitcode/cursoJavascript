//los operadores en javascriot son: &&, ||, !, ==, ===, !=, !==, >, <, >=, <= ??(funcion de nulos)
//aunque sean llamados logicos, estos pueden ser aplicado no solo a booleanos
//operador || (OR)
let a = 10;
let b = 20;
if(a || b > 5){
    console.log("a es true");
}

// alert(true || true); // true (verdadero)
// alert(false || true); // true
// alert(true || false); // true
// alert(false || false); // false (falso

let hour = 7;
if (hour < 10 || hour > 18) {
    console.log("La oficina esta cerrada");
}


//operador && (AND)
let c = 10;
let d = 20;
if(c && d > 5){
    console.log("c es true");
}

// alert(true && true); // true
// alert(false && true); // false
// alert(true && false); // false
// alert(false && false); // false

let hours = 12;
let minute = 30;
if (hours == 12 && minute == 30) {
    console.log(`Son las ${hours}:${minute}`);
}

//! not
