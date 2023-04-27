
var personas = [
    {
        nombre: "Sofía",
        edad: 24,
        esAdmin: true,
        email: "abc@gmail.com"
    },
    {
        nombre: "Claudia",
        edad: 38,
        esAdmin: false,
        email: "claudia@outlook.com"
    },
    {
        nombre: "Rodolfo",
        edad: 2,
        esAdmin: true,
        email: "rodolfocat@gmail.com"
    },
    {
        nombre: "Arthur",
        edad: 24,
        esAdmin: true,
        email: "arthur@yahoo.com"
    },
    {
        nombre: "Noemi",
        edad:58,
        esAdmin: false,
        email: "no.emi@gmail.com"
    }
] 


for (let i = 0; i < personas.length; i++) {
    if (personas[i].esAdmin == true){
        console.log("Hola " + personas[i].nombre + " usted es admin del sistema, enviamos un email para " + personas[i].email + " para que pueda crear una contraseña.")
    }else{
        console.log("Hola " + personas[i].nombre + ", usted no es admin del sistema.")
    }
}    
