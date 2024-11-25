const route = require('express').Router();

const chacalController = require("../controller/chacal.controller");

// POST
route.post("/createAtributos", chacalController.saveAtributos);
route.post("/createInventario", chacalController.saveItens);
route.post("/createNotas", chacalController.saveNotas);
route.post("/createMagia", chacalController.saveMagia);
route.post("/createProtecao", chacalController.saveProtecao);
route.post("/createClasse", chacalController.saveClasse);
route.post("/createHabilidades", chacalController.saveHabilidades);
route.post("/createPersonagem", chacalController.savePersonagem);

// GET
route.get("/viewPersonagem/:id", chacalController.viewPersonagem);
route.get("/listaPersonagem", chacalController.listaPersonagens);
route.get("/listaSeusPersonagens/:userId", chacalController.listaSeusPersonagens);
 
// UPDATE
route.patch("/updateFicha/:id", chacalController.updateFicha);

module.exports = route;  