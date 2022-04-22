/**que es el bracketpoint: es un punto de codigo donde el debugger pausara 
 * automaticamente el programa y permitira ver el codigo que esta siendo ejecutado
 */

function saludo(name){ 
    let frase = `bienvenido, ${name}!`;
    debugger; //pausa el programa
    say(frase); 

}

function say(frase){
    alert(`** ${frase} **`);
}

/**El suso correcto de las llaves {} */

/**Lo que no se debe hacer  por que en este caso no son necesarias */

if (n < 0) { alert(`Power ${n} is no supported`);}
/**Eso es lo que hacen los junior normalmente */

/**La forma adecuada como deberia quedar */
if (n < 0)
    alert(`Power ${n} is no supported`); //una linea sin llaves, aceptable si es corta
    /**o si deseas utilizar llaves que quede de esta forma */

    if (n < 0 ){
        alert(`Power ${n} is no supported`);
    }
