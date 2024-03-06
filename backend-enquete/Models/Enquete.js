// models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../Config/database');

const User = sequelize.define('Enquete', {
  Id: {
    type: DataTypes.TINYINT,
    allowNull: false,
    unique: true,
  },
  Titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Inicio: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  Fim: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Enquete.sync(); // Sincroniza o modelo com o banco de dados

module.exports = Enquete;
