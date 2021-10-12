//declaramos las constantes haciendo referencia a los id de las etiquetas necesarias en el html
const select = document.getElementById("select");
const precio = document.getElementById("precio");
const estado = document.getElementById("estado");
const imagen = document.getElementById("imagen");
const result = document.getElementById("result");

//creamos una funcion anonima haciendo referencia a la funcion change  en el select
select.addEventListener("change",
 function(){
   //tenemos nuestro arreglo de objetos
  let products = [
    { id:1,detail: 'Arroz',price: 2000, image: "images/arroz.jpg", offer: false},
    { id:2,detail: 'Lentejas',price: 1000, image: "images/lenteja.png", offer: true},
    { id:3,detail: 'Papa',price: 3500, image: "images/papa.jpg", offer: true},
    { id:4,detail: 'Carne',price: 1800, image: "images/carne.png",  offer: false},
    { id:5,detail: 'Salchichas',price: 3500, image: "images/salchicha.jpg", offer: false},
    { id:6,detail: 'Sal',price: 1000, image: "images/sal.jpg", offer: false},
    { id:7,detail: 'Verduras',price: 1800, image:"images/verduras.jpg", offer: false},
    { id:8,detail: 'Agua',price: 1000, image: "images/agua.jpg", offer: false},
  ];
  //tomamos los valores del select y de los option en el html
   const selectedOption = this.options[select.selectedIndex];
   //imprimo lo que hay en el select y en el option
   console.log(selectedOption.value + ': ' + selectedOption.text);
   //declaro la metodo foreach para recorrer mi arreglo de objetos
   products.forEach(element => {
     //valido si el nombre del detalle es igual al value que trae el option
    if(element.detail === selectedOption.value){
      // console.log("salio bien");
      //imprimo los datos del producto correspondiente
      document.getElementById("result").textContent = "producto: " + element.detail;
      document.getElementById("precio").textContent = "precio: " + element.price;
      console.log(element.image);
      // document.getElementById("imagen").textContent = element.image;
      //valido si es true o false para saber el estado de disponibilidad
      if(element.offer == true){
      document.getElementById("estado").textContent = "estado: Disponible";
    }else{
      document.getElementById("estado").textContent = "Estado: Agotado";
    }
    
    }
  
  });
});







