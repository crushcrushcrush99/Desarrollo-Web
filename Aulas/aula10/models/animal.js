const mongoose = require('mongoose')

const animalSchema = mongoose.Schema({
    nome:{ type: String, require: true},
    raca:{ type: String, require: true},
    peso:{ type: Number, require: true}
})

const animal = mongoose.model('Animais', animalSchema)

module.exports = animal