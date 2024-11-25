const Habilidade = require('../../models/Chacal/habilidades');

const saveService = (body) => Habilidade.create(body);

const updateHabilidades = (id, habilidades) => Habilidade.findByIdAndUpdate(id.habilidades, habilidades, {new: true});

module.exports = {saveService, updateHabilidades}; 