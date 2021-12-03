
//ciclo foreach
let marcas = ['Avon', 'amway', 'Ebbel'];
marcas.forEach(element => {
    console.log(element);

});

// ciclo for in
let animales = { 1: 'perro', 2: 'gato', 3: 'ave' };
for (anim in animales) {
    console.log(anim);
}

var persona1 = ['Darwin', 2021, 'Developer'];
var persona2 = {
    nombre: 'Dariwn',
    edad: 36
}

var persona3 = {
    nombre: 'Elena',
    edad: 33
}


var personas = [persona2, persona3];

for (let i = 0; i < personas.length; i++) {
    if (personas[i].edad <= 25) {
        break;
    }
    const element = personas[i].nombre;
    console.log(element);
}

personas.forEach(element => console.log(element.edad));

