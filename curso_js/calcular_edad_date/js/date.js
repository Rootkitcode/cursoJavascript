const nombre = document.getElementById("nombre")
const age = document.getElementById("age")
const nom = document.getElementById("nomb")
const res = document.getElementById("respuesta")


const calcular = (age)=>{
    const fechaActual = new Date();
    const anoActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth()) +1;
    const diaActual = parseInt(fechaActual.getDay()); 



    const anoNac=parseInt(String(age).substring(0,4));
    const mesNac=parseInt(String(age).substring(5,7));
    const diaNac=parseInt(String(age).substring(8,10));

     
    let edad = anoActual - anoNac;
    if(mesActual < mesNac){
        edad--;
    }else if(mesActual === mesNac){
        if(diaActual<diaNac){
            edad--;
        }
            
    }
    
return edad;
};

window.addEventListener('load', function(){
  nombre.addEventListener('change', function(){
    if(this.value){
        document.getElementById("nomb").textContent=`Su nombre es: ${calcular(this.value)}`;
    }

  });
  
});

window.addEventListener('load', function(){
    age.addEventListener('change', function(){
        if(this.value){
            document.getElementById("res").textContent=`la edad es: ${calcular(this.value)} años de edad`;
        }
        // console.log(this.value);
    });
});






      

