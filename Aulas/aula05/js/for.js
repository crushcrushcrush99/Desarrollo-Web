var tareas = [
    "lavar lozas",
    "lavar ropa", 
    "hacer comida",
    "lavar bañera"
]

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*for(var i = 0; i < tareas.length; i++){
    if(tareas[i] == "lavar bañera"){
        break //pare
    }
    
    console.log(tareas[i])
}

for (var x = 0; x < numeros.length; x++) {
    if (numeros[x] % 2 == 0){
        console.log("es par")
    } else {
        console.log("es impar")
    }
    
}*/

for(var tarea of tareas){
    console.log(tarea)
}