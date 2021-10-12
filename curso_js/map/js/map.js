pelicula1 = {
    titulo: "La Momia",
    anio: 2027,
    valoracion: 4
}

pelicula2 = {
    titulo: "Rapidos Y furiosos",
    anio: 2025,
    valoracion: 5
}

pelicula3 = {
    titulo: "Eventos",
    anio: 2018,
    valoracion: 5
}



peliculas = [pelicula1, pelicula2, pelicula3]


let reducirValoracion = (acum, { valoracion }) => acum + valoracion

let miValoracion = peliculas.reduce(reducirValoracion, 0)

console.log(miValoracion);

let sumarValoracion = ({
    valoracion
}) => valoracion >= 5 ? valoracion += 1 : valoracion += 0

let valorado = peliculas.map(sumarValoracion)
console.log(valorado);