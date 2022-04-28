// este es un comentario de linea suelen ser cortos

/**Esto es un comentario de bloque
 * suelen ser mas completos y en varias
 * lineas
 */

function verPrimo(n){
    nexPrimo:
    for (let i = 2; i < n; i++) {
        //comprobar si es un numero primo

        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nexPrimo;
        }
        console.log(i);
    }
}