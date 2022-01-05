/*
*Declaraciones de funciones:
podemos declarar una funcion de la siguiente manera:
fucntion showMesage(){
    console.log("mensaje a mostrar");
}
la palabra clave function va primero del nombre de la funcion, 
luego una lista de parametros entre parentesis peraprados por comas,
y finalmente el codigo de la funcion entre llaves llamado (el cuerpo de la funcion)
 */

function showMesage(){
    console.log("hola a todos");
}
showMesage();
showMesage();

/**
 * Variables localaes
 * una variable declarada dentro de una funcion es visible solo dentro de esa funcion
 * ejemplo:
 * 
 */

function mensaje(){
    let saludar = "Hola a todos los presentes"; //variable local
    console.log(saludar);

}
mensaje();
//console.log(saludar); //error, variable local no esta definida  


/**Variables Externas
 * una funcion tambien puede tener variables externas y acceder a ellas
 */

let nombre = "Darwin";

function llamarNombre(){
    let message = "bienvenido," + nombre;
    console.log(message);
}
llamarNombre();

/**
 * funciones con parametros
 */

function parametros(from, text){
    console.log(from + " " + text);

}
parametros("Darwin", "bienvenido");

/**
 * Nomenclatura de funciones
 * Las funciones son acciones, entonces sus nombres
 * suelen ser verbos, asi que se debe de sr preciso
 * al describir lo que hace la fucnion
 * "get" devuelve un valor
 * "calc" calculan algo
 * "creatae" crea algo
 * "check" chequea algo
 */

function primos(n){
    primo: for (let i = 2; i < n; i++){
        for (let j = 2; j < i; j++){
            if (i % j == 0) continue primo;
        }
        console.log(i);    // i es primo  
    }
}
primos(20);





