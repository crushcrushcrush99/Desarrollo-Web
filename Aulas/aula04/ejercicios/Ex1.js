var persona = {
    nombre: "Fulano",
    edad: 18
}
var persona2 = {
    nombre: "Mengano",
    edad2: 15
}
var persona3 = {
    nombre: "Sultano",
    edad: 45
}

/*for (var i = 0; i < personas.length; i++) {
    personas[i].edad > personas[i + 1].edad
   ----esto se usa para listas---- 
}*/
if (persona.edad > persona2.edad && personas3.edad){
    console.log(persona.nombre + " es mayor de edad")
} else if (persona2.edad > persona.edad && persona3.edad){
    console.log(persona2.nombre + " es mayor de edad")
} else {
    console.log(persona3.nombre + " es mayor de edad")
}