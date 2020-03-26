const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Criar uma sessão(fazer log-in)
routes.post('/sessions', SessionController.create);

//Listagem das ongs, método list no insomnia
routes.get('/ongs', OngController.index);
//Cadastro de ong
routes.post('/ongs', OngController.create);

//Listar casos de uma determinada ONG
routes.get('/profile', ProfileController.index);

//Listagem de caso/incident
routes.get('/incidents', IncidentController.index);
//Cadastro de caso/incident
routes.post('/incidents', IncidentController.create);
//Exclusão de um caso/incident
routes.delete('/incidents/:id', IncidentController.delete)
module.exports = routes;