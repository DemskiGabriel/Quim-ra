const mongoose = require('mongoose');

const AtributosSchema = new mongoose.Schema({
    //Atributos de PODER
    totalPoder:{
        type: String,
        required: false, 
        default: ' '
    },
    sorte:{
        type: String,
        required: false, 
        default: ' '
    },
    vontade:{
        type: String,
        required: false, 
        default: ' '
    },
    magia:{
        type: String,
        required: false, 
        default: ' ' 
    },
    manaAtual:{
        type: String,
        required: false, 
        default: ' '
    },
    manaMax:{
        type: String,
        required: false, 
        default: ' '
    },

    //Atributos de MENTE
    totalMente:{
        type: String,
        required: false, 
        default: ' '
    },
    percepcao:{
        type: String,
        required: false, 
        default: ' '
    },
    persuasao:{
        type: String,
        required: false, 
        default: ' '
    },
    sapiciencia:{
        type: String,
        required: false, 
        default: ' '
    },
    sanidadeMax:{
        type: String,
        required: false, 
        default: ' '
    },
    sanidadeAtual:{
        type: String,
        required: false, 
        default: ' '
    },

    //Atributos de CORPO
    totalCorpo:{
        type: String,
        required: false, 
        default: ' '
    },
    forca:{
        type: String,
        required: false, 
        default: ' '
    },
    destreza:{
        type: String,
        required: false, 
        default: ' '
    },
    vigor:{
        type: String,
        required: false, 
        default: ' '
    },
    vidaMax:{
        type: String,
        required: false, 
        default: ' '
    },
    vidaAtual:{
        type: String,
        required: false, 
        default: ' '
    }
});

const atributos = mongoose.model("Atributos", AtributosSchema);

module.exports = atributos;
