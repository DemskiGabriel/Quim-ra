const mongoose = require('mongoose');

const notasSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: false,
        default: " "
    },
    idade:{
        type: String,
        required: false,
        default: ' '
    },
    nivel:{
        type: String,
        required: false,
        default: 1
    },
    anotacoes:{
        type: String,
        required: false,
        default: " "
    }
})

const notas = mongoose.model("Notas", notasSchema);

module.exports = notas;