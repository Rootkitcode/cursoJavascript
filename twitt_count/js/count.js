const nombre = document.getElementById("nombre");
const inicial = document.getElementById("inicial");
const texto = document.getElementById("texto");
const form = document.getElementById("form");
const count_text = document.getElementById("count_text");

nombre.addEventListener("change", function(){
    if(nombre.value){

       let dato = document.getElementById("inicial"); 
       dato.textContent= nombre.value.charAt(0).toUpperCase();  
       
    } 

});

function limitText(campoLimite, contadorLimite, numeroLimite) {
	if (campoLimite.value.length > numeroLimite) {
		campoLimite.value = campoLimite.value.substring(0, numeroLimite);
	} else {
		contadorLimite.value = numeroLimite - campoLimite.value.length;
	}
    if(campoLimite.value === 50){
        console.log(campoLimite);
        // document.getElementById("quedan").textContent = "Te quedan: " +  campoLimite;
    }
}