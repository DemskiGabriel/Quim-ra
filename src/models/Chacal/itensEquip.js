const mongoose = require('mongoose');

const ItensSchema = new mongoose.Schema({
    inventario:{
        type: String,
        required: false, 
        default: " "
    },
    dinheiro: {
        type: String,
        required: false,
        default: 0
    },
    banco: {
        type: String,
        required: false,
        default: 0
    }
})

const itens = mongoose.model("Itens", ItensSchema);

module.exports = itens; 