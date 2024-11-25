const Itens = require('../../models/Chacal/itensEquip');

const saveService = (body) => Itens.create(body);

const updateItens = (id, itensEquip) => Itens.findByIdAndUpdate(id.itensEquip, itensEquip, {new: true});

module.exports = {saveService, updateItens}; 