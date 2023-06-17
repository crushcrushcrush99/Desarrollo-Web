const mongoose = require('mongoose')

const funcionarioSchema = mongoose.Schema({
    nombre: { type: String, requires: true },
    cargo: { type: String, requires: true},
    funcional: { type: Number, requires: true},
    admitidoEn: { type: Date, requires: true}
})

const funcionario = mongoose.model('Funcionarios', funcionarioSchema)

module.exports = funcionario