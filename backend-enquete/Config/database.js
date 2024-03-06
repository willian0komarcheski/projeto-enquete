// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('aplicacao_1', 'seu_usuario', 'sua_senha', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
