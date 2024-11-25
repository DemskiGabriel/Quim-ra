const mongoose = require('mongoose');

const protecaoSchema = new mongoose.Schema({
    cabeca:{
        type: String,
        required: false,
        default: 0 
    },
    costas:{
        type: String,
        required: false,
        default: 0 
    },
    torco:{
        type: String,
        required: false,
        default: 0 
    },
    maos:{
        type: String,
        required: false,
        default: 0 
    },
    pernas:{
        type: String,
        required: false,
        default: 0 
    },
    pes:{
        type: String,
        required: false,
        default: 0 
    },
})

const protecao = mongoose.model("Protecao", protecaoSchema);

module.exports = protecao;