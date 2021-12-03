// ciclo while
var n = 0;
var x = 0;

while (n < 5) {
    n++;
    x += n;
}
console.log(x);


let precio = 0;
ganacia = 0;

while (precio < 10) {
    precio++;
    ganacia += precio;
}

console.log(ganacia);

/**
 * Ejercicio: bucle while ( mientras)
 * while (condicion) {
 *    // código a ejecutar
 * llamado del bulce
 * }
 * mientras la condicion sea verdadera
 * el codigo se ejecutara
 */

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
//la se cuencia mostrara 0, luego1, luego2 etc

/**
 * do while
 * do {
 *   // código a ejecutar
 * } while (condicion);
 * el bucle primero ejecuta el cuerpo y luego comprueba la condicion
 * y mientras sea un valor verdadero se eejcutara
 * 
 */
console.log("************** ciclo while*************")
let r = 0;
do{
    console.log(r);
    r++;
} while (r < 10);

//ejercicios bucle for

console.log("****************** bucle for ********************")

for (let i = 0; i < 10; i++) {
    console.log(i);
}

/**
 * vamos a examinar el ciclo for por partes 
 * para entenderlo mejor:
 * comienzo let i = 0 Se ejecuta una vez al comienzo del bucle
 * i < 10 comprobamos antes de cada iteracion del bucle, si es falsa el ciclo termina.
 * conslole.log(i) se ejecuta cada vez que el bucle da una vuelta o cumple un ciclo mientras el bucle sea verdadero
 * i++ incrementamos el valor de i en 1 y asi hasta cumplir con el ciclo.
 */

//ejemplo con contador
console.log("****************** bucle for contador ********************")
let contador = 0;
for (contador = 0; contador < 7; contador++) {
    console.log(`Esta iteracion o vuelta vale:  ${contador}`); 
}

//ejemplo para motrar numeros pares
console.log("****************** bucle for numero par ********************")
for (let i = 2; i<= 10; i++){
    if(i%2 == 0){
        console.log(`numero par: ${i}`);
    }
}

console.log("****************** bucle for numero impar ************************")
for (let h = 0; h<= 10; h++){
    if (h%2 != 0){
        console.log(`numero impar: ${h}`);
    }
}



