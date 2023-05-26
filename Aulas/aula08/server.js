const express = require('express')
const app = express()
const port = 8050

app.use(express.json())

let bancoDeDadosProdutos = []

app.get('/produtos',(req, res) => {
   return res.status(200).json(bancoDeDadosProdutos)
})

app.post('/adicionar-produto', (request, response) => {
    let body = request.body

    console.log(body)

    bancoDeDadosProdutos.push(body)
    return response.status(201).json('produto adicionado con sucesso!')
})
//app.put()
//app.delete()

http://localhost:8050/teste

app.listen(port, function(){
     console.log(`Servidor rodando http://localhost:${port}`)
})

