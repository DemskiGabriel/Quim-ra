const mongoose = require('mongoose');

const connectDatabase = (req, res) => {
    console.log("Aguardando conexão");
    
    //FALTA PALAVRA CHAVE APÒS ULTIMA BARRA
    mongoose.connect('mongodb://127.0.0.1:27017/bd')
        .then(() => console.log('MongoDB conectado!'))
        .catch((error) => console.log(error));
}

module.exports = connectDatabase;