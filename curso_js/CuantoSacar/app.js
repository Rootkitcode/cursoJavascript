const nota1 = document.getElementById("n1");
const nota2 = document.getElementById("n2");
const nota3 = document.getElementById("n3");
const boton = document.getElementById("btn-calcular");
const notaMinima = 3.0;
const notaMaxima = 5.0;
const notas = 3;




function calcularPromedio(){
    promedio =parseFloat(nota1.value) + parseFloat(nota2.value);
    resultado = promedio / notas;
    promedioReal = parseFloat(nota1.value) + parseFloat(nota2.value) + resultado;
    calculo = promedioReal /notas;
    cuantoNecesito1 = notaMinima-calculo;
    cuantoNecesito2 = notaMaxima - calculo; 
    necesitaMinimo = cuantoNecesito1 + calculo;
    necesitoMaximo = cuantoNecesito2 + calculo;
    necesito1 = necesitaMinimo; 
    necesito2 = necesitoMaximo;

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


calcularPromedio();
    



