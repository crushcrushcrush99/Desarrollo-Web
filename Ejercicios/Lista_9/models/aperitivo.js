const mongoose = require('mongoose')

const aperitivoSchema = mongoose.Schema({
    nombre: { type: String, requires: true },
    descripcion: { type: String, requires: true },
    vegano: { type: Boolean, requires: true },
    enStock: { type: Boolean, requires: true },
    publicadoEn: { type: Number, requires: true }
})

const aperitivo = mongoose.model('Aperitivos', aperitivoSchema)

module.exports = aperitivo