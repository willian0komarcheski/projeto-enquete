// services/EnqueteService.js
const { where } = require('sequelize');
const Enquete = require('../Models/Enquete');

class EnqueteService {
  async createEnquete(titulo, inicio, fim) {
    return Enquete.create({ titulo, inicio, fim });
  }

  async findAllEnquete() {
    return Enquete.findAll();
  }
  async getEnqueteById(id) {
    return Enquete.findOne({ where: { id } });
  }

  async updateEnquete(id, Enquete) {
    return Enquete.update(Enquete, {where: {id}});
  }

  async deleteEnquete(id) {
    return Enquete.destroy({where: {id}})
  }
}
module.exports = new EnqueteService();
