// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(bodyParser.json());

// Importa o controller
const EnqueteController = require('./src/Controllers/EnqueteController');

// Rota para criar um usuário
app.post('/enquete', async (req, res) => EnqueteController.createEnquete(req, res));

app.put('/enquete/:id', async (req, res) => EnqueteController.updateEnquete(req, res));
// Rota para buscar um usuário por email
app.get('/enquete/:id', async (req, res) => EnqueteController.getEnqueteById(req, res));

app.delete('/enquete/:id', async (req, res) => EnqueteController.destroyEnquete(req, res));

app.get('/enquete', async (req, res) => EnqueteController.findAllEnquete(req, res));

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
