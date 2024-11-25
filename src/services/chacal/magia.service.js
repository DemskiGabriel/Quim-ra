const magias = require('../../models/Chacal/magia');

const saveMagia = (body) => magias.create(body);

module.exports = saveMagia;