const EnqueteService = require('C:/Users/richard/Desktop/projeto-enquete/backend-enquete/src/Services/EnqueteService');
class EnqueteController {
  async createEnquete(req, res) {
      const { titulo, inicio, fim } = req.body;
  
      try {
        const newEnquete = await EnqueteService.createEnquete(titulo, inicio, fim);
        res.status(201).json(newEnquete);
      } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).json({ error: 'Ocorreu um erro durante a criação do usuário.' });
      }
    }
  
    async getUserById(req, res) {
      const { id } = req.params;
  
      try {
        const enquete = await EnqueteService.getEnqueteById(id);
        res.status(200).json(enquete);
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        res.status(500).json({ error: 'Ocorreu um erro durante a busca do usuário.' });
      }
    }
  }
  
  module.exports = new EnqueteController();
  