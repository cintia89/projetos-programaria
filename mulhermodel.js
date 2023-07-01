const mongoose = require('mongoose')

const mulherSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true //requered true é obrigatorio,required false não é obrigatorio
    },
    imagem: {
        type: String,
        required: true,
    },
    citacao: {
        type: String,
        required: true,
    },
    minibio: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('diva', mulherSchema)