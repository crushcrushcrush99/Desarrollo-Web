const mongoose = require('mongoose')

const productoSchema = mongoose.Schema({
        nombre: { type: String, requires: true },
        descripcion: { type: String, requires: true},
        valor: { type: Number, requires: true},
        enStock: { type: Boolean, requires: true},
        publicadoEn: { type: Date, requires: true}
})

const producto = mongoose.model('Productos', productoSchema)

module.exports = producto