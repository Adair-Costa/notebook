// importa o framework express
const express = require("express");

// instanciacao do router
const routes = express.Router();

// chamar os controllers
const AnnotationController = require("./controllers/AnnotationController");
const PriorityController = require("./controllers/PriorityController");
const ContentController = require("./controllers/ContentController");

// criando as rotas
// rota annotatios GET
routes.post("/annotations", AnnotationController.create);
routes.get("/annotations", AnnotationController.read);
routes.delete("/annotations/:id", AnnotationController.delete);

// rota prioridades GET
routes.get("/priorities", PriorityController.read);
routes.post("/priorities/:id", PriorityController.update);

// rota alterar conteudo da nota
routes.post("/contents/:id", ContentController.update);

// exportca todas as rotas
module.exports = routes;