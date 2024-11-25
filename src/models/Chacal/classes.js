const mongoose = require('mongoose');

const classeSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
    },
    ativa:{
        type: String,
        required: true,
    },
    passiva:{
        type: String,
        required: true,
    }
})

const classe = mongoose.model("Classe", classeSchema);

module.exports = classe;