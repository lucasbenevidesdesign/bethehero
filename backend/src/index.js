const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar uma infromação do back-end
  * POST: Criar uma informaçãi no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Parms: Parâmetros nomeados enviados na rota após o "?" (filtros, paginação)
   * Route Parms: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */

// app.post('/users', (request, response) => {
//     const body = request.body;
    
//     console.log(body);

//     return response.json({
//         evento: 'Semana OmniStack 11.0',
//         aluno: 'Lucas Benevides'
//     })
// });

