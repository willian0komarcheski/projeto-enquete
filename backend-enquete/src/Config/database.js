// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Enquete', 'root', 'eu odeio banco de dados123', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
