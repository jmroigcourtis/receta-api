let mongoose = require('mongoose')
let Schema = mongoose.Schema

const receta = new Schema({
    name: {type: String, required: true},
    ingredientes: {
        ingrediente_01: {type: String, required: true},
        ingrediente_02: {type: String, required: true},
        ingrediente_03: {type: String, required: true}
    }
})

module.exports = mongoose.model('recetas', receta)