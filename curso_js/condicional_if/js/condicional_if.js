//condicionales if javascript

// una sentencia if evalua una condicion en los parentesis y si el resultado es true ejecuta un bloque de codigo.

// let year = prompt('En que año nacio?: ');
// if(year == year){
//     console.log('tienes: ' + (2021 - year) + ' años de edad: ');
// }


let year = prompt('En que año nacio?: ');
if (year <= 2021 && year >= 1980){ 
    console.log('tienes: ' + (2021 - year) + ' años de edad: ');
}
else if(year > 2021){
    console.log('tu año de nacimiento es mayor que el actual');
}
