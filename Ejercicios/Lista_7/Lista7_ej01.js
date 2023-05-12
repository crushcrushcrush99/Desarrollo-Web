const express = require('express')
const app = express()
const port = 8000

let usuarios = [
    {
        nombreUsuario: "RodolfoRoblox",
        creadoEn: "27/04/2015",
        edad: 21,
        email: "rodolforoblox@gmail.com",
        esAdmin: true,
        telefono: 1147839222,
        direccion: ["Ruta A", "Barrio Y", "Ciudad C"]
    },
    {
        nombreUsuario: "AnaliaPerez",
        creadoEn: "10/01/2020",
        edad: 26,
        email: "analiaperez@gmail.com",
        esAdmin: false,
        telefono: 02204996340,
        direccion: ["Ruta D", "Barrio Z", "Ciudad F"]
    },
    {
        nombreUsuario: "Chopsuwu",
        creadoEn: "19/08/2010",
        edad: 24,
        email: "chopsuwu@hotmail.com",
        esAdmin: false,
        telefono: 1142470099,
        direccion: ["Ruta Q", "Barrio A", "Ciudad N"]
    },
    {
        nombreUsuario: "Gordelissia",
        creadoEn: "15/02/2011",
        edad: 25,
        email: "arthurgordelissia@gmail.com",
        esAdmin: true,
        telefono: 02204987568,
        direccion: ["Ruta B", "Barrio V", "Ciudad W"]
    },
    {
        nombreUsuario: "MadMax",
        creadoEn: "22/05/2021",
        edad: 33,
        email: "madmax89@gmail.com",
        esAdmin: false,
        telefono: 22270388,
        direccion: ["Ruta X", "Barrio S", "Ciudad M"]
    }
]

let productos = [
    {
        nombreProducto: "Labial Rojo MAC",
        descripcion: "Labial Rojo MAC- con fragancia a moras",
        valor: 120,
        creadoEn: "02/10/2013",
        enStock: false
    },
    {
        nombreProducto: "Perfume Natura Tododia",
        descripcion: "Suave y delicada con notas florales",
        valor: 210,
        creadoEn: "25/05/2020",
        enStock: true
    },
    {
        nombreProducto: "Serum Facial Glow Boost",
        descripcion: "Jojoba, Lavanda y Caléndula",
        valor: 500,
        creadoEn: "10/11/2003",
        enStock: true
    },
    {
        nombreProducto: "Labial Negro AVON",
        descripcion: "Labial Negro intenso con colageno",
        valor: 560,
        creadoEn: "27/10/2023",
        enStock: false
    },
    {
        nombreProducto: "Agua Micelar",
        descripcion: "Agua Micelar con fragancia a Rosas",
        valor: 155,
        creadoEn: "07/06/2021",
        enStock: true
    }
]

app.get("/usuarios", function (req, res) {
    return res.send(usuarios)
})
app.get("/productos", function (req, res) {
    return res.send(productos)
})

//------ SERVIDOR RODANDO------
app.listen(port, function () {
    console.log(`servidor rodando http://localhost:${port}`)
})