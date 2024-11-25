const mongoose = require('mongoose');

const habilidadesSchema = new mongoose.Schema({
    antropologia: {
        type: String,
        required: false,
        default: ' ',
    },
    arqueologia: {
        type: String,
        required: false,
        default: ' ',
    },
    biologia: {
        type: String,
        required: false,
        default: ' ',
    },
    idiomas: {
        type: String,
        required: false,
        default: ' ',
    },
    historia: {
        type: String,
        required: false,
        default: ' ',
    },
    medicina: {
        type: String,
        required: false,
        default: ' ',
    },
    ocultismo: {
        type: String,
        required: false,
        default: ' ',
    },
    teologia: {
        type: String,
        required: false,
        default: ' ',
    },
    avaliarHonestidade: {
        type: String,
        required: false,
        default: ' ',
    },
    convencimento: {
        type: String,
        required: false,
        default: ' ',
    },
    intimidacao: {
        type: String,
        required: false,
        default: ' ',
    },
    empatia: {
        type: String,
        required: false,
        default: ' ',
    },
    bajulacao: {
        type: String,
        required: false,
        default: ' ',
    },
    credito: {
        type: String,
        required: false,
        default: ' ',
    },
    manha: {
        type: String,
        required: false,
        default: ' ',
    },
    tratoPolicial: {
        type: String,
        required: false,
        default: ' ',
    },
    arrombamento: {
        type: String,
        required: false,
        default: ' ',
    },
    cienciaForense: {
        type: String,
        required: false,
        default: ' ',
    },
    farmacia: {
        type: String,
        required: false,
        default: ' ',
    },
    fotografia: {
        type: String,
        required: false,
        default: ' ',
    },
    oficio: {
        type: String,
        required: false,
        default: ' ',
    },
    sobrevivencia: {
        type: String,
        required: false,
        default: ' ',
    },
    arte: {
        type: String,
        required: false,
        default: ' ',
    },
    astronomia: {
        type: String,
        required: false,
        default: ' ',
    },
    armasBrancas: {
        type: String,
        required: false,
        default: ' ',
    },
    armasFogo: {
        type: String,
        required: false,
        default: ' ',
    },
    atletismo: {
        type: String,
        required: false,
        default: ' ',
    },
    briga: {
        type: String,
        required: false,
        default: ' ',
    },
    fuga: {
        type: String,
        required: false,
        default: ' ',
    },
    furtividade: {
        type: String,
        required: false,
        default: ' ',
    },
    reparosMecanicos: {
        type: String,
        required: false,
        default: ' ',
    },
    sentirPerigo: {
        type: String,
        required: false,
        default: ' ',
    }
})

const habilidades = mongoose.model("Habilidades", habilidadesSchema);

module.exports = habilidades;