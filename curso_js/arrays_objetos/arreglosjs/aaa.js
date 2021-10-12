var myArray = ['Darwin', 'Elena', 'Johanns', 'Diederick'];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);

const myarray2 = ['front-end', 'backend', 'fullstack'];
myarray2.forEach(element => console.log("Esta es la respuesta con foreach javascript " + element));


let array3 = ['PHP', 'Javascript', 'Angular', 'Mysql', 'Python'];
array3.forEach(element => console.log(element));


const ejempplofor = { a: 1, b: 2, c: 3, d: 4 };
for (const property in ejempplofor) {
    console.log(`${property}: ${ejempplofor[property]}`);

}

const tarjetas = { visa: 42, Mastercard: 52, Amex: 44, Discover: 36, Diners: 43 };
for (const tarjet in tarjetas) {
    console.log(`${tarjet}: ${tarjetas[tarjet]}`);

}

let cursos = ['Curso Laravel', 'Curso NodeJs', 'Curso VueJs', 'Curso Python'];
console.log('Bienvenidos a la seccion de cursos de programacion.')
console.log('******************************************************************')
cursos.forEach(element => console.log(element));
console.log('******************************************************************')



let speed = 5;
if (speed % 15 && speed % 3) {
    console.log('speddBuzz');
} else {
    console.log('no coincide');
}


let cuenta = 5;

for (i = 0; i < 12; i++) {
    console.log(cuenta * i);
}


const carros = ['mazda', 'toyota', 'renault', 'nissan']; //objetos del array
for (const car in carros) {
    console.log(`${car}:  ${carros[car]}`);
}