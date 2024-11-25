const route = require('express').Router();

const userController = require('../controller/user.controller');

route.post("/Registro",userController.saveUser);

route.get("/login", userController.viewUser);

route.get("/user/:id", userController.viewUserById);

module.exports = route;