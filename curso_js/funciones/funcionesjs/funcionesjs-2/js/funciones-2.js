function showMessage() {
  console.log("hola a todos, bienvenidos a funciones javascript");
}
showMessage();

function saludo(){
    console.log("Hola Aprendices del curso de javascritp");
}

saludo();

//variables locales

function mensaje() {
    let message = "Curso de javascript funciones!";
    console.log(message);
}
mensaje();

// variables externas

let userName = 'Darwin Tusarma';

function nombre() {
    let saludar = "Hola, " + userName;
    console.log(saludar);
}
nombre();

//parametros

/**se pueden pasar
 * datos arbitrarios a funciones usando parametros.
 */

function mensajeParametro(from, text ) {
    console.log(from + ": " + text);
}

mensajeParametro("Darwin", "Hola a todos");
mensajeParametro("Elena", "Bienvenida a este cursos de javascript");
/**cuando la funcion se llama y los valores dados se copian en variables locales
 * from y text. y la funcion las utiliza
 */

//otro ejemplo

function nuevoMensjae(from, text) {
    from ='*' + from + '*';
    console.log(from + ": " + text);
}

let form = "Darwin";
nuevoMensjae(form, "Hola a todos");
console.log(form);

/** cuando un valor es pasado como un parametro de funcion
 * tambien se denomina como argumento.
 * Un parametro es una variable listada dentro de los parentesis de la declaracion de la funcion
 * Un argumento es el valor que es pasado a la funcion cuando esta es llamada.
*/

// ejemplo de parametros sin pasar argumentos

function mensajesDePrueba(text1, text2 = "sin datos"){
    console.log(text1 + ": " + text2);

}

mensajesDePrueba("Darwin")// la salida seria Darwin: sin datos
//debido a que en el parametro text2 le asignamos por defecto un valor
// por esto el codigo al no encontrar un argumento asignado a text2 el obtiene el valor asignado en el parametro = "sin datos"

/**Parametros predeterminados alternativos
 * 
 */

function mensajePredeterminado(text){
    if(text === undefined){
        text = "mensaje vacio";
    }
    console.log(text);

}
mensajePredeterminado(); // mensaje vacio


// devolviendo un valor

function sumar(a, b){ 
    return a + b;

}

let resultado = sumar(3,5);
console.log(resultado);

// ejemplo con prompt

function verificaredad(edad){
    if(edad >= 18){
        return true;
    }else{
        return "No tienes la edad suficiente";
    }
}

let edad = prompt("Ingrese su edad");
if (verificaredad(edad)){
    console.log("Bienvenido al sistema");
}else{
    console.log("acceso denegado");
}

/**Cabe resaltar que una funcion con un return vacio
 *  devolveria undefined, si la funcion no devuelve un vlor
 * es lo mismo que un undefined.
 */

//funciones == comentarios
/**se recomienda que las funciones deben de ser cortas
 * y que sean significativas o dicientes
 * se recomienda dividir en otras funciones si esta es muy larga
 * suele ser algo complejo pro es lo que se recoienda
 */

function showPrimes(n) {
    nextPrime: for(let i = 4; i< n; i++){

        for(let j = 4; j < i; j++){
                if(i % j == 0) continue nextPrime;
                }
                console.log(i);
            }
        }
    
    

