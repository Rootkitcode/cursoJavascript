var opcion = "algun menu adicional";
switch (opcion) {
    case 1:
        console.log("Menu de opciones: ");

        break;
    case 2:
        console.log("Menu de tienda.");
        break;

    case "algun menu adicional":
        console.log("nuevo menu");
        break;

    default:
        break;
}

//las sentencias switch pueden tener una lista de casos y pueden ser representadas
//por una serie de bloques de código.

/**
 * switch tiene uno o mas bloques case y un opcional default
 */
let a = 2 + 2;
switch (a){
    case 3:
    console.log("Muy pequeño");
    break;
    case 4:
    console.log("muy exacto");
    break;
    case 5:
        console.log("muy grande");
        break;
    default:
        console.log("no se encontro");

}
/**
 * en este caso cuando el ciclo comienza a ejecutarse
 * en el primer caso o sea el 3 el falla, en el 4 caso es correcto ya que el evalua 
 * la condicion si se cumple.
 */

// agrupando case
let b = 3 + 3;
switch (b){
    case 4:
        console.log("!incorrecto");
        break;
    case 5:
        console.log("!incorrecto");
        break;
    case 6:
        console.log("!correcto");
        break;

    default:
    console.log("!no coincide");
}
/**
 * debemos de tener en cuenta que cualquier expresion 
 * puede ser un argumento
 */

let c = "1";
let d = 0;
switch (+c){
    case d + 1:
        console.log("esto se ejecuta");
        break;
        default:
            console.log("no se ejecuta");
}

