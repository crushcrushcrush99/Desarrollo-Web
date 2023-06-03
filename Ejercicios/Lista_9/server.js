const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8050
const connectionString = "mongodb+srv://admin:teste123@appdb.wv6kdpm.mongodb.net/"
const Bebida = require('./models/bebida')

app.use(express.json())


app.get("/listar-bebidas", async (req, res) => {
    try{
        let bebidas = await Bebida.find()
        return res.status(200).json(bebidas)
    }catch(error){
        return res.status(500).json(error)
    }
   
})


app.post('/agregar-bebida', async (req, res) =>{
    let { nombre, descripcion, fabricante, enStock, publicadoEn } = req.body

    let bebida = {
        nombre,
        descripcion,
        fabricante,
        enStock,
        publicadoEn
    }

    try{
        await Bebida.create(bebida)
        return res.status(200).json({mensaje: "Bebida registrada con éxito"})
    } catch (error){
        return res.status(500).json({mensaje: error.message})
    }
})

app.get("/listar-aperitivos", async (req, res) => {
    try {
        let aperitivos = await Lanche.find()
        return res.status(200).json(aperitivos)
    } catch (error) {
        return res.status(500).json(error)
    }
})

app.post('/agregar-aperitivo', async (req, res) =>{
    let { nombre, descripcion, vegano, enStock, publicadoEn } = req.body

    let aperitivo = {
        nombre,
        descripcion,
        vegano,
        enStock,
        publicadoEn
    }

    try{
        await Aperitivo.create(aperitivo)
        return res.status(200).json({mensaje: "Aperitivo registrado con éxito"})
    } catch (error){
        return res.status(500).json({mensaje: error.message})
    }
})

mongoose.connect(connectionString, {
    dbName: "DevsBar"
}).then(() => {
    console.log("MongoDB UP!")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})