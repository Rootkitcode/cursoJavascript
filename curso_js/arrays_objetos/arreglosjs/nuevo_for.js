//ejemplo de for para dar pasos

// for (let paso = 0; paso < 10; paso++) {
//     if(paso === 5){
//         console.log(`estamos a mitad de camino ${paso}`);
//     }
//     //se ejecuta 10 veces, con valor 0 a 9
//     //hago uso de un template literal e implemento la interpolacion del parametro paso
//     console.log(`camina ${paso} hacia el este`);
// }

function cuantos(selectObject){
    let numinstrumentoElegido = 0;
    for(let i = 0; i < selectObject.options.length; i++){
        if(selectObject.options[i].selected){
            numinstrumentoElegido++;

        }
    }
    return numinstrumentoElegido;
}
let btn = document.getElementById("btn");
btn.addEventListener('click', function(){
    console.log("Numero de instrumentos elejidos: " + cuantos(document.selectForm.instrumentos));
});

