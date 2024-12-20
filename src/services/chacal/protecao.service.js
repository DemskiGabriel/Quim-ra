const Protecao = require('../../models/Chacal/protecao');

const saveService = (body) => Protecao.create(body);

const updateProtecao = (id, protecao) => Protecao.findByIdAndUpdate(id.protecao, protecao, {new: true});

module.exports = {saveService, updateProtecao};  