const express = require('express')
const app = express()
const port = 8010

app.use(express.json())

let bancoDeDadosProdutos = []

app.get('/listar-produtos',(req, res) => {
   return res.status(200).json(bancoDeDadosProdutos)
})

app.post('/adicionar-produto', (request, response) => {
    let body = request.body

    console.log(body)

    bancoDeDadosProdutos.push(body)
    return response.status(201).json('produto adicionado con sucesso!')
})

app.listen(port, function(){
     console.log(`Servidor rodando http://localhost:${port}`)
})