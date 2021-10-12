let randomNumber = Math.floor(Math.random()*100) +1; 
//en esta linea estoy llamando dos metodos  Math.floor que sirve para devolver un numero entero
//y el math.random para generar numero aleatorio
const actual = document.querySelector('.actual');
//queryselector devuelve el primer elemento del documento
//las tres primeras constantes sirven para almacenar una referencia en los p del html
const anterior = document.querySelector('.anterior');
const carga = document.querySelector('.carga');
const submit = document.querySelector('.submit');

const numero = document.querySelector('.numero');

let count = 1;
let resetButton;




function mensaje(){
    let user = Number(numero.value);//Constructor number
    if(count === 1){
        actual.textContent = "Intentos anteriores: ";

    }
    actual.textContent += user + " ";
    if(user === randomNumber){
        anterior.textContent = "¡Felicidades! ¡Adivinaste!";
        anterior.getElementsByClassName.backgroundColor = 'green';
        carga.textContent =" ";
        setGameOver();

    }else if (count === 10){
        anterior.textContent = "Fin del Juego";
        setGameOver();
    }else{
        anterior.textContent = "Incorrecto";
        anterior.style.backgroundColor = 'red';
        if(user < randomNumber){
            carga.textContent = "El numero es bajito";
        }else if(user > randomNumber){
            carga.textContent = "El numero es muy grande";
        }
    }
    count ++;
    numero.value = '';
    numero.focus(); // focus permite ejecutar una funcion handle cuando el elemento se aenfocado

}
//se tiene en cuenta uae declaramos una variable user y establece su valor actual ingresando dentro del campo de texto.
//tambien ejecutamos este valor a traves de el constructor Number integrado, solo para asegurarnos de que el valor definitivamente es un numero


mensaje();
mensajeSubmit.addEventListener('click', mensaje);

function setGameOver(){
    numero.disabled=true;
    submit.disabled=true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Iniciar nnuevo juego';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
    //las dos primeras lineas deshabilitan el campo de texto y el boton fijando las propiedadesdisable en true.
    //es necesario para el jugador no siga enviando mas intentos cuando termine el juego
    //las siguientes tres lineas generan un nuevo elemento, establece la etiqueta de texto e inicia un nuevo juego
    //la ultima linea establece una escucha de eventos en nuestro nuevo boton para que cuenado se haga click en el se ejecute la funcion
}

function resetGame(){
    count = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
        
    }

    resetButton.parentNode.removeChild(resetButton);
    numero.disabled = false;
    submit.disabled = false;
    numero.value = '';
    numero.focus();
    anterior.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random()*100)+1;

    //este bloque de codigo sirve para restablecer todo al inicio

}