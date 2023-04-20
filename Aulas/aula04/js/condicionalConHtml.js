    var edad = prompt("Ingrese su edad ")

    if(edad >= 18){
        document.writeln("es mayor de edad. ")
    }else if(edad < 18 && edad > 0 ){
        document.writeln("es menor de edad. ")
    }else{
        ("Error. Edad invalida.")
    }
