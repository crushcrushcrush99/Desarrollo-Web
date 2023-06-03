const mongoose = require('mongoose')

const bebidaSchema = mongoose.Schema({
    nombre: { type: String, requires: true },
    descripcion: { type: String, requires: true },
    fabricante: { type: String, requires: true },
    enStock: { type: Boolean, requires: true },
    publicadoEn: { type: Number, requires: true }
})

const bebida = mongoose.model('Bebidas', bebidaSchema)

module.exports = bebida