var nombre = "admin"
var contrasena = "admin"

if (nombre == "admin" && contrasena == "password"){
    console.log("Bienvenido al sistema | usted es admin.")
} else if (nombre == "admin" || contrasena == "password"){
    console.log("Bienvenido al sistema | usted no es admin, y tiene menos permisos.")
} 