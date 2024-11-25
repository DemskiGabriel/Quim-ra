const usuarios = require('../models/usuario');

const saveService = (body) => usuarios.create(body);

const viewUser = () => usuarios.find();

const viewUserById = (id) => usuarios.findById(id);

module.exports = {saveService, viewUser, viewUserById};