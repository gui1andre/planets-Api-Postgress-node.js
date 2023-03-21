const express = require('express');
const routes = express.Router();

const PlanetController = require('../controller/planetController');
const SateliteController = require('../controller/sateliteController');


routes.post('/planets', PlanetController.store);
routes.get('/planets', PlanetController.getAll);
routes.put('/planets/:id', PlanetController.update);
routes.delete('/planets/:id', PlanetController.delete);

routes.post('/planets/:id/satelites', SateliteController.store);
routes.get('/planets/:id/satelites', SateliteController.getAll);

module.exports = routes;