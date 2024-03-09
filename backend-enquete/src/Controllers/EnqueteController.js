const EnqueteService = require('../Services/EnqueteService');
class EnqueteController {
  async createEnquete(req, res) {

      try {
        const { Titulo, Inicio, Fim } = req.body;
        console.log("Titulo recebido:", Titulo);
        console.log("Inicio recebido:", Inicio);
        console.log("Fim recebido:", Fim);
        const Enquete = await EnqueteService.createEnquete(Titulo, Inicio, Fim);
        console.log("Titulo recebido:", Titulo);
        console.log("Inicio recebido:", Inicio);
        console.log("Fim recebido:", Fim);
        res.status(201).json(Enquete);

      } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).json({ error: 'Ocorreu um erro durante a criação do usuário.' });
      }
    }

    async findAll(req, res) {
      try {
        const enquete = await EnqueteService.findAllEnquete();
        res.status(200).json(enquete);
      } catch(error) {
        console.error("Erro ao buscar enquetes", error);
        res.status(50).json({ error: 'Erro ao buscar enquete' });
      }
    }

    async getEnqueteById(req, res) {
      const { id } = req.params;
  
      try {
        const enquete = await EnqueteService.getEnqueteById(id);
        res.status(200).json(enquete);
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        res.status(500).json({ error: 'Ocorreu um erro durante a busca do usuário.' });
      }
    }

    async destroyEnquete(req, res) {
      
    }
  }
  
  module.exports = new EnqueteController();
  