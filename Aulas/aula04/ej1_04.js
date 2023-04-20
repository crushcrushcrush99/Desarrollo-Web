var nombre = window.prompt('Ingrese su nombre: ')//Anclano
var apellido = prompt('Ingrese su nombre: ')//Perez
var nombreCompleto = nombre + ' ' + apellido
var edad = prompt('Ingrese su edad: ')//25
var ruta = prompt('Ingrese su ruta: ')//Ruta Z
var estado = prompt('Ingrese su estado: ')//Buenos Aires

var personas =[
        
    {
        nombrePersona: 'Fulano',
        edad: 20,
        /*direccion: ['Ruta X', 943839485, "SP"]
    }*/
        direccion : {
            ruta: 'Ruta X',
            estado: 'Sao Paulo',
            ciudad: 'Sao Paulo'
    }
},
       
{
    nombrePersona: nombreCompleto,
    edad: edad,
    direccion : {
        ruta: ruta,
        estado: estado,
        ciudad: 'Merlo'
    }
}]


console.log(personas)