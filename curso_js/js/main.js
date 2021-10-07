let nombreDeLaVariable = document.querySelector('h1');
console.log('¡Hola!');

let tarjeta = 42;

if (tarjeta === 42) {
    console.log("Esta tarjeta es VISA")
} else {
    console.log("Es otra franquicia")
}


let color = "Blue";

if (color === "Red") {
    console.log("Estas daltonico")
} else {
    console.log("esta todo normal")
}

let colorOriginal = "Yellow";
let colorAlterno = "Yellow";
if (colorOriginal === colorAlterno) {
    console.log(true);
} else {
    console.log(false);
}

//ejercicios operadores matematocos

function multiplicar(n1, n2) {
    let respuesta = n1 * n2;
    console.log(respuesta);
}

multiplicar(3, 5);
multiplicar(6, 9);

//sumas

function sumar(s1, s2) {
    let resultado = s1 + s2;
    console.log(resultado);
}

sumar(4, 8);
sumar(1, 4);


//restar

function restar(r1, r2) {
    let residuo = r1 - r2;
    console.log(residuo)
}

restar(4, 2);
restar(13, 4);

//eventos

document.querySelector('html').onclick = function() {
    alert('¡Ouch deja de pincharme!');
}