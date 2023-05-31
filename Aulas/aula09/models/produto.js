const mongoose = require('mongoose')

const produtoSchema = mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    valor: { type: Number, required: true },
    //likes: { type: Number, required: false }
})

const Produto = mongoose.model('produtos', produtoSchema)

module.exports = Produto