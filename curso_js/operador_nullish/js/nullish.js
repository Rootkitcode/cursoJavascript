//la funcion de null se escribe con doble signo ??
//en este caso trata un null y un undefined de forma similar.

let user;
console.log(user ?? "Anonimo");//en este caso anonimo es usuario no definido


let user2 = "Darwin";
console.log(user2 ?? "Anonimo");//en este caso Darwin es usuario definido  

let firsName = null;
let lastName = null;
let nickName = "Supercoder";

//mostramos elprimer valor definido
console.log(firsName ?? lastName ?? nickName ?? "Anonimo");//en este caso supercoder es el primer valor definido

// comparacion con || (OR)

//al igual que con nullish ?? con OR || podemos hacer las comparaciones y obtener el mismo resultado

let nombre = null;
let apellido = null;
let nick = "SupperHack"; //este es el valor que queremos mostrar

console.log(nombre || apellido || nick || "Anonimo");//en este caso superhack es el primer valor definido
/*La diferencia entre  || y ??
es que  || devuelve el primer valor verdadero
mientras que ?? devuelve el primer valor definido.
el || no distingue entre false, 0, un string vacio "", y un null/undefined
todos son los mismos valores falsos.
*/

let height = 0;//altura
console.log(height || 100);//en este caso 100 es el primer valor definido
console.log(height ?? 100);//en est caso 100 es el primer valor definido
