const personagem = require('../../models/Chacal/personagem');

const saveService = body => personagem.create(body);

// Busca apenas 1 personagem
const viewPersonagem = id => personagem.findById(id);

//  Busca todos
const listaPersonagens = () => personagem.find();

// buscaTodos os personagens de um usuario especifico
const viewPersonagemPorUsuario = userId => personagem.find({ username: userId }).populate('username');

module.exports = {saveService, viewPersonagem, listaPersonagens, viewPersonagemPorUsuario}; 