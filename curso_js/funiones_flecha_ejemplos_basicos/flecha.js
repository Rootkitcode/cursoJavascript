//ejemplos de funciones flecha basicos

/*tenemos en cuenta que una funcion flecha es una funcion anonima*/

/*ejemplo*/
let func =(a, b) => a + b;/*vemos como en este pequeño ejemplo de funcion pasamos 2 parametros y evalua la expresion,
esto quiere decir que la funcion acepta dos argumentos a y b y tras la ejecucion evalua la expresion a + b*/
console.log(func(2,3));/*imprimimos el resultado de la funcion*/


/*en este caso es lo mismo que si tuvieramos la siguiente funcion*/

let func2 = function(a, b){
    return a + b;
}
/*pero en este caso la funcion flecha es mas optima ya que no necesitamos crear una funcion anonima*/
console.log(func2(2,3));/*imprimimos el resultado de la funcion*/

/*vamos a ver un ejemplo pero con una funcion donde se omite el parentesis de los parametros*/

let func3 = a => a * 2;/*en este caso la funcion flecha es mas corta*/
console.log(func3(2));/*imprimimos el resultado de la funcion*/

/*los parentecis pueden estar vacios*/

let saludo = () => 'hola mundo';
console.log(saludo());/*imprimimos el resultado de la funcion*/

/**ejemplo con cuadro de dialogo usando el metodo prompt() */

let edad = prompt('ingrese su edad', 18);

let bienvenido = (edad >= 18) ?
() => alert('bienvenido') :
() => alert('saludos');

bienvenido();/*imprimimos el resultado de la funcion*/
