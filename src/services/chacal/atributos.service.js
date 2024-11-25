const Atributos = require('../../models/Chacal/atributos');

const saveService = (body) => Atributos.create(body);

const updateAtributos = (id, atributo) => Atributos.findByIdAndUpdate(id.atributos, atributo, {new: true});

module.exports = {saveService, updateAtributos}; 