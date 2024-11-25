const Nota = require('../../models/Chacal/notas');

const saveNotas = (body) => Nota.create(body);

const updateNotas = (id, notas) => Nota.findByIdAndUpdate(id.notas, notas, {new: true});

module.exports = {saveNotas, updateNotas};