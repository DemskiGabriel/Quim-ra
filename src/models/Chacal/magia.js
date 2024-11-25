
const mongoose = require('mongoose');
const magiaSchema = new mongoose.Schema({
    alcance:{
        type:String,
        required: false,
        default: 1
    },
    duracao:{
        type:String,
        required: false,
        default: 1
    },
    tempo:{
        type:String,
        required: false,
        default: 0
    },
    efeito:{
        type:String,
        required: false,
        default: 2
    },
    descricao:{
        type:String,
        required: false,
        default: " "
    },
    custoTotal:{
        type:String,
        required: false,
        default: 4
    }
});

const magia = mongoose.model("Magia", magiaSchema);

module.exports = magia;