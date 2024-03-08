// services/EnqueteService.js
const Enquete = require('../Models/Enquete');

class EnqueteService {
  async createEnquete(titulo, inicio, fim) {
    return Enquete.create({ titulo, inicio, fim });
  }

  async getEnqueteById(id) {
    return Enquete.findOne({ where: { id } });
  }
}
module.exports = new EnqueteService();
