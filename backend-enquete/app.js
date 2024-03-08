// app.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());

// Importa o controller
const EnqueteController = require('C:/Users/richard/Desktop/projeto-enquete/backend-enquete/src/Controllers/EnqueteController');

// Rota para criar um usuário
app.post('/enquete', async (req, res) => EnqueteController.createEnquete(req, res));

// Rota para buscar um usuário por email
app.get('/enquete/:id', async (req, res) => EnqueteController.getUserById(req, res));

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
