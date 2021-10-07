var acceso = true;
// var accesoU = function(a) {
//     return a
// }

var accesoU = a => a //retorna un solo valor

accesoU(acceso) == true ?
    console.log("Usuario permitido") :
    console.log("Usuario denegado")



var password = true;


var passwordUser = (p, n) => console.log(`El password:  ${n} Acceso ${p}`)

passwordUser(password, "Darwin")

// passwordUser(password) == true ?
//     console.log("La contraseña es correcta") :
//     console.log("contraseña invalida")

// ejemplode un parametro o varios parametros en un Metodo 
// function ejemplo(a, b, c){

// } 
var entrada = true;

var usuario = (u, name) => {
    console.log(`usuario ${name} en ejecucion`)
    return u
}

usuario(entrada, "Darwin") == true ?
    console.log("Usuario permitido") :
    console.log("Usuario denegado")

// ejercicios proios

let cuadrante = true;

let fuerza = (b, policia) => {
    console.log(`la fuerza va en camino llamaron a la 
        ${policia} por que hubieron disparos y necesitan 
        ambulanicas para los heridos`)

    return b

}

fuerza(cuadrante, "patrulla de policia y ambulancia") == true ?
    console.log("Unidades que llegan") :
    console.log("unidades que cuidan")