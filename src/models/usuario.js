const mongoose = require('mongoose');

const UsuariosSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    gmail:{
        type: String,
        required: true
    },
    senha:{
        type: String,
        required: true
    },
    avatar:{
        type: String,
        required: false,
        default: "https://th.bing.com/th/id/OIP.PoS7waY4-VeqgNuBSxVUogAAAA?rs=1&pid=ImgDetMain"
    }
});

const usuarios = mongoose.model("Usuarios", UsuariosSchema);

module.exports = usuarios;