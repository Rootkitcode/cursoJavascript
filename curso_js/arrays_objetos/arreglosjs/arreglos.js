//declaremos un objeto o variable

var myobjeto = {
    //tiene clave : valor ejemplo:

    nombre: 'Elena',
    edad: 32,
    genero: 'femenina'
}

console.log(myobjeto.nombre + " " + myobjeto.edad + " " + myobjeto.genero);





var objeto = {
    nom: "Darwin",
    edad: 36,
    genero: "masculino"
}
console.log("El usuario: " + objeto.nom + " tiene " + objeto.edad + " de edad, " + " y es genero: " + objeto.genero);


var estado = "alegre";

var miestado = {

    Nombre: "Darwin",
    edad: 36,
    genero: "Masculino",
    relevante: true,
    contenido: `Usuario ${estado}`,
    mifuncion: (a, b) => a + b,
    fecha: new Date()
}

console.log("El usuario: " +
    miestado.Nombre +
    " tiene: " +
    miestado.edad +
    " y su genero es: " +
    miestado.genero +
    " estado real: " +
    miestado.relevante +
    " el usuario esta en estado:  " +
    miestado.fecha.getFullYear() +
    " La fecha de hoy es: " +
    miestado.contenido +
    " y su nivel de felicidad es: " +
    miestado.mifuncion(3, 6));

var { nombre } = miestado; //desestructuracion de un objeto

var otrafucnion = ({ genero }) => genero;

console.log(otrafucnion(miestado));

// ejemplo de objetos

let prueba = {
    test1: 1,
    test2: 1.1,
    test3: " test"
}

console.log(prueba.test1 + prueba.test2 + prueba.test3);


let prueba2 = {
    casa: "norte",
    carro: "toyota",
    dinero: 300,
    fortuna: true

}

console.log("Tiene una gran casa ubicada en el: " +
    prueba2.casa + " tiene parqueada una camioneta " + prueba2.carro +
    " tiene " + prueba2.dinero + " millones en el banco" +
    " y preguntan si esto es: " + prueba2.fortuna)