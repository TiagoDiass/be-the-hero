const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 *
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após o '?' e
 * geralmente eles servem pra filtros, paginação
 *
 * Route Params: Parâmetros utilizados para identificar recursos
 *
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 */

/**
 * Sobre o BD
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

app.listen(3333);
