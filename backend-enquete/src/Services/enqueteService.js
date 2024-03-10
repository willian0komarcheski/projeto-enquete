// services/EnqueteService.js
const { where } = require('sequelize');
const Enquete = require('../Models/Enquete');

class EnqueteService {
  async createEnquete(Titulo, Inicio, Fim) {
    return Enquete.create({ Titulo, Inicio, Fim });
  }

  async findAll() {
    return Enquete.findAll();
  }
  async getElementById(id) {
    return Enquete.findOne({ where: { id } });
  }

  async update(id, Titulo, Inicio, Fim) {
    return Enquete.update({ Titulo, Inicio, Fim }, {where: {id}});
  }

  async destroy(id) {
    return Enquete.destroy({where: {id}})
  }
}
module.exports = new EnqueteService();
