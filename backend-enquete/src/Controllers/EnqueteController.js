const EnqueteService = require('../Services/enqueteService');
class EnqueteController {
  async createEnquete(req, res) {

      try {
        const { Titulo, Inicio, Fim } = req.body;
        console.log("Titulo recebido:", Titulo);
        console.log("Inicio recebido:", Inicio);
        console.log("Fim recebido:", Fim);
        const Enquete = await EnqueteService.create(Titulo, Inicio, Fim);
        console.log("Titulo recebido:", Titulo);
        console.log("Inicio recebido:", Inicio);
        console.log("Fim recebido:", Fim);
        res.status(201).json(Enquete);

      } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).json({ error: 'Ocorreu um erro durante a criação do usuário.' });
      }
    }

    async findAllEnquete(req, res) {
      try {
        const enquete = await EnqueteService.findAll();
        res.status(200).json(enquete);
      } catch(error) {
        console.error("Erro ao buscar enquetes", error);
        res.status(50).json({ error: 'Erro ao buscar enquete' });
      }
    }

    async updateEnquete(req, res) {
      
      try {
        const { id } = req.params;
        const { Titulo, Inicio, Fim } = req.body;  
        console.log("", id);
        console.log("", Titulo);
        await EnqueteService.update(id, Titulo, Inicio, Fim);
        const enquete = await EnqueteService.getElementById(id);
        res.status(200).json(enquete);
      } catch(error) {
        res.status(500).json("Erro ao atualizar enquete");
      }
    }

    async getEnqueteById(req, res) {
      const { id } = req.params;
  
      try {
        const enquete = await EnqueteService.getElementById(id);
        res.status(200).json(enquete);
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        res.status(500).json({ error: 'Ocorreu um erro durante a busca do usuário.' });
      }
    }

    async destroyEnquete(req, res) {
    
    try {
      const {id} = req.params;
      await EnqueteService.destroy(id);
      res.status(204).json();
    } catch (error) {
      res.status(500).json("Erro ao deletar a enquete");
      }    
    }
  }
  
  module.exports = new EnqueteController();
  