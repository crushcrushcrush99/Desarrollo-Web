const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8030
const connectionString = "mongodb+srv://admin:teste123@appdb.wv6kdpm.mongodb.net/"
const Funcionario = require('./models/funcionario')
const Producto = require('./models/producto')

app.use(express.json())

app.post('/agregar-funcionario', async (req, res) =>{
    let { nombre, cargo, funcional, admitidoEn } = req.body

    let funcionario = {
        nombre,
        cargo,
        funcional,
        admitidoEn
    }

    try{
        await Funcionario.create(funcionario)
        return res.status(200).json({mensaje: "Funcionario registrado con éxito"})
    } catch (error){
        return res.status(500).json({mensaje: error.message})
    }
})


app.get("/listar-funcionarios", async (req, res) => {
    try{
        let funcionarios = await Funcionario.find()
        return res.status(200).json(funcionarios)
    }catch(error){
        return res.status(500).json(error)
    }
   
})

app.post('/agregar-producto', async (req, res) =>{
    let { nombre, descripcion, valor, enStock, publicadoEn } = req.body

    let producto = {
        nombre,
        descripcion,
        valor,
        enStock,
        publicadoEn
    }

    try{
        await Producto.create(producto)
        return res.status(200).json({mensaje: "Producto registrado con éxito"})
    } catch (error){
        return res.status(500).json({mensaje: error.message})
    }
})


app.get("/listar-productos", async (req, res) => {
    try {
        let productos = await Producto.find()
        return res.status(200).json(productos)
    } catch (error) {
        return res.status(500).json(error)
    }
})


mongoose.connect(connectionString, {
    dbName: "DevShop"
}).then(() => {
    console.log("MongoDB UP!")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})
