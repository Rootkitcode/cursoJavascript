var a = 2;
a = a + 3; //operadores aritmeticos + - * / %
console.log(a);

b = 2;
b = b * 5;
console.log(b);

c = 3;
c = c / b;
console.log(c);

d = 12;
d = d % 3;
console.log(d);
//operadores de asignacion
var f = 2; //+= -= *= /= %= **=
f += 3;
console.log(f);


//ejemplo: 

g = 2; //numero
g2 = '2'; //string  
console.log(g == g2); //nos va arrojar un rsultado true 
//por que aunque sea un numerico y un string
//contienen el mismo valor diferente de si lo hiciera con ===

h = 2
h2 = '2'; //string
console.log(h === h2); //nos va a dar false porque 
//va a comparar que son diferentes tipos de datos

j = 2;
j2 = '2';
console.log(j !== j2);