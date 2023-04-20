var persona = {
    nombre: "Fulano",
    edad: 15,
    direccion: 
    {
        ruta: "Ruta X",
        cep: "843749475"
    }

    if (persona.edad >= 18){
        console.log("es mayor de edad.")
    } else if (persona.edad < 18 && persona.edad > 0){
        console.log("es menor de edad.")
    }else{
        console.log("error. Edad invalida")
    }
}