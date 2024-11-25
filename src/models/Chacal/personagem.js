const mongoose = require('mongoose');

const personagemSchema = new mongoose.Schema({
    atributos:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Atributos",
        required: true
    },
    classe:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Classe",
        required: true
    },
    habilidades:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Habilidades",
        required: true
    },
    itensEquip:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Itens",
        required: true
    },
    notas:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Notas",
        required: true
    },
    protecao:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Protecao",
        required: true
    },
    avatar:{
        type: String,
        required: false,
        default: "https://th.bing.com/th/id/OIP.PoS7waY4-VeqgNuBSxVUogAAAA?rs=1&pid=ImgDetMain"
    },
    username:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuarios",
        required: true
    }
});

const personagem = mongoose.model("Personagem", personagemSchema);

module.exports = personagem;