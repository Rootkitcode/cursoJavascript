//declaro las variables en este caso las constantes haciendo referencia a los identificadores del html
const nota1 = document.getElementById("n1");
const nota2 = document.getElementById("n2");
const nota3 = document.getElementById("n3");
const boton = document.getElementById("btn-calcular");
//declaro unas constantes con los valores minimo y maximo de la nota que puede sacar el aprendiz
const notaMinima = 3.0;
const notaMaxima = 5.0;
const notas = 3;



//declaro el metodo calcularPromedio donde va la logica del claculo a promediar
function calcularPromedio(){
    //Sumo los dos valores iniciales
    promedio =parseFloat(nota1.value) + parseFloat(nota2.value);
    //el resultado de la suma la divido por la cantidad de notas
    resultado = promedio / notas;
    //sumo nuevamente las notas mas el resultado de la suma y la division
    promedioReal = parseFloat(nota1.value) + parseFloat(nota2.value) + resultado;
    //obtengo el resultado real del promedio de las notas
    calculo = (promedioReal /notas).toFixed(2);
    //muestro cuanto es lo minimo que necesito para pasar
    cuantoNecesito1 = notaMinima-calculo;
    //muestro cual es lo maximo que necesito para pasar
    cuantoNecesito2 = notaMaxima - calculo; 
    //sumo el resultado obtenido mas lo que necesito para obtener el promedio y ver si me alcanza
    necesitaMinimo = cuantoNecesito1 + calculo;
    necesitoMaximo = cuantoNecesito2 + calculo;
    //muestro lo que necesito para ambos casos la minima y la maxima
    necesito1 = necesitaMinimo; 
    necesito2 = necesitoMaximo;
    //realizo las validaciones necesarias para calcular en que promedio esta

    if(calculo >3.0 && calculo <=3.9){
      document.getElementById("n3").textContent = "" + parseFloat(calculo);
      document.getElementById("respuesta").textContent = "Pasa raspando";
    }else{
        if(calculo > 4.0){
            document.getElementById("n3").textContent = "" + parseFloat(calculo);
            document.getElementById("respuesta").textContent = "Pasas con la media";
            
        }else{
            if(calculo < 3.0){
                document.getElementById("n3").textContent = "" + parseFloat(calculo);
                document.getElementById("respuesta").textContent = "Lo sentimos debes de repetir semestre";
                
            }
        }
    }
    //imprimo por consola todos los datos para saber que me esta arrojando cada parametro y operacion ejecutada
    console.log('--las tres notas--');
    console.log(promedioReal);
    console.log('--------------');
    console.log('---nota-- ');
    console.log(calculo);
    console.log('___________lo que necesita___________');
    console.log(necesito1);
    console.log(necesito2);
    console.log('__________________________');
    console.log('---- promedio----');
    console.log(promedio);
    console.log('------------------');
    console.log('----- resultado tercera nota-----');
    console.log(resultado);
    console.log('-------------------');
    console.log('--cuanto necesito minimo----');
    console.log(cuantoNecesito1);//media de 3
    console.log('----------------------');
    console.log('--cuanto necesito maximo--');
    console.log(cuantoNecesito2);// media de 5
    console.log('-------------------');
    console.log('--paso full---');
    console.log(necesitoMaximo);
    console.log('--------------');
    console.log('---pasa raspando--');
    console.log(necesitaMinimo);
    
    
}

//obtengo los datos y los paso por el boton para mostrarlos en mi html
calcularPromedio();
calcular.addEventListener("click", calcularPromedio);
    



