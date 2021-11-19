//ejemplode api rest sencilla utilizando fetch
//este ejemplo es haciendo uso de metodo GET donde obtenemos los recursos desde el servidor

fetch('https://jsonplaceholder.typicode.com/users')
.then(response =>response.json())
.then(json => console.log(json))

//ejemplode una api con fetch  bajo metodo post enviando un nuevo recurso al servidor

const newLocal = fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({
        name: "Darwin",
        surname: "Tusarma Taba"
    }),
    headers: {
        "Content-Type": "application/json"
    }
})

    .then(response => response.json())
    .then(json => console.log(json))
    
