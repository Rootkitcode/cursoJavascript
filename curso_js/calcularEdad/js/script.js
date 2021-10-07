const formulario = document.getElementById("form")
const age = document.getElementById("age")
const nombre = document.getElementById("name")
const button = document.getElementById("button")


   
    
   
function validar(){
    if(nombre.value){
        document.getElementById("nomb").textContent="bienvenido: " + nombre.value;

    }

    
    
    if(age.value < 0){
        document.getElementById("parrafo").textContent = "Edad no valida";

    }else{
        if(age.value > 0 && age.value <= 17){
            document.getElementById("parrafo").textContent = "Es menor de edad, no puede sufragar";

        }else{
            if(age.value >=18 && age.value <= 120){
                document.getElementById("parrafo").textContent = "Es apto para sufragar";
            }else{
                if(age.value > 121){
                    document.getElementById("parrafo").textContent = "Es fraude votar con cedula de muertos";
                }else{
                    formulario.sumit()
                    
                }
            }

            
        }
    }
}
button.addEventListener("click",validar)