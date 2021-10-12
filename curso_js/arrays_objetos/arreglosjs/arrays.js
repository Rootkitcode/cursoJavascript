// Un arreglo es una colección de objetos, generalmente del mismo tipo, pero en JS,podemos
// construir arreglos de distintos tipos
let fruits = ['Apple','Orange','leemon','pineapple','Coconut','Strawberry','Raspberry','Banana'];
// fruits.forEach(element => console.log("resultado: " + element))
let numbers = [1,2,100,5.2,NaN,1500000];
let products = [
  { id:1,detail: 'Rice',price: 2,offer: false},
  { id:2,detail: 'Sugar',price: 1,offer: true},
  { id:3,detail: 'Popato',price: 3, offer: true},
  { id:4,detail: 'Water',price: 1, offer: false}
];
let names = new Array('Edwin','Diana','Julio','Catalina');
let positions = [[1,2,3],[4,5,6],[7,8,9]];

// add_or_del_array_methods();
function add_or_del_array_methods() {
  // Agregar un nuevo elemento al Array
  // fruits.push('Soursop');  
  // console.table(fruits);

  // Eliminar elemento del Array
  // fruits.pop();  
  // console.table(fruits);

  // Agregar un elemento al principio
  // fruits.unshift('Watermelon'); 
  // console.table(fruits);

  // Eliminar el primer elemento
  // fruits.shift();    
  // console.table(fruits);
}

// helpers_arrays();
function helpers_arrays() {
  // para acceder a un elemento específico utilizamos su índice, recordemos que el primer índice siempre será 0
  // console.log(names[3]);
  // console.log(names[4]);

  // Para conocer la dimensión(Cantidad de elementos) que tiene un arreglo utilizamos la propiedad .length
  // console.log(numbers);
  // console.log(numbers.length);

  // Acceder a los elementos de un sub Arreglo
  // console.log(positions[1][1]);

  // ¿Qué retorna el siguiente arreglo?
  // console.log(positions.length);

  // ¿Cómo puedo conocer la dimensión de un arreglo interno?
  // console.log(positions[1].length);

  // Agregar elementos con spread operation
  // let numbers_2 = [...numbers,5001];
  // console.table(numbers_2);

  // Eliminar con método Splice, recibe dos parámetros(el primero es la posición y el segundo la cantidad de elementos);
  // console.table(numbers);
  // numbers.splice(4,1);
  // console.table(numbers);

  // Para usar el destructuring en Arrays, se usan los corchetes y la posición
  // const [ uno,,tres ] = numbers;
  // console.log(uno);
  // console.log(tres);

  // Comparando con un objeto, que el destructuring es con la llave
  // const example = {
  //   id: 01,
  //   name:'Edwin',
  //   color:'blue',
  //   age: 34
  // }

  // const { age,name } = example;
  // console.log(name,age);
}

// traveling_arrays();
function traveling_arrays() {
  
  // para recorrer un array podemos usar la forma convencional(no recomendada) y es con algún ciclo(iterador).
  // for (let index = 0; index < fruits.length; index++) {
  //   console.log(fruits[index]);    
  // }

  // Podemos usar el método forEach, recibe una función callback
  // Ver función callback...
  // fruits.forEach( (element)=> {console.log(element);} );

  // El método Map, cobra vida para no dañar el array original, hace casi lo mismo que el foreach
  // pero dentro de un nuevo arreglo.

  // let new_fruits = fruits.map(element => element = 'Apple');
  // console.table(fruits);
  // console.table(new_fruits);
}

array_methods()
function array_methods() {

  // Verificar si un elemento existe en el Arreglo
  // console.log(fruits.includes('Apple'));

  // Para buscar en un Array de objetos, utilizamos el .some
  // const stock = products.some(element => {
  //   return element.detail === 'Rice'
  // });
  // console.log(stock);

  //Retornar el índice del elemento.
  // const index = names.findIndex(name => name === 'Edwin');
  // const index2 = names.findIndex(name => name === 'Gustavo');
  // console.log(index,index2);

  // otra cosa interesante es que el foreach también lo puede retornar
  // names.forEach((name,index)=> {
  //   if (name === 'Catalina') {
  //     console.log(index);
  //   } 
  // });

  // La función reduce, reduce por algunos elementos, pero antes revisemos:
  // Imaginemos por un momento como sumamos los totales de los productos agregados
  // let total = 0;
  // products.forEach(product => {
  //   total += product.price
  // })
  // console.log(total);

  // let total_2 = products.reduce((acum,product)=> acum + product.price, 0);
  // console.log(total_2);

  // La función filter como su nombre lo indica nos ayudará a filtrar por los elementos que le digamos
  // let offer = products.filter(product => product.offer === true);
  // console.table(offer);

  // // Podemos usarlo para elminar un elemento específico
  // let refresh_products = products.filter(product => product.detail !== 'Sugar');
  // console.log(refresh_products);


}


// callback_explain(callback);
// function callback_explain(mi_callback) {
//   let name = 'Ed';
//   let age = 34;
//   mi_callback(name,age);
// }

// function callback(name,age) {
//   console.log(`Hola, mi nombre es ${name},y tengo ${age}`);
// }
