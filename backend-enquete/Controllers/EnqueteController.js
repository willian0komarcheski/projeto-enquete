class UserController {
    async createEnquete(req, res) {
      const { titulo, inicio, fim } = req.body;
  
      try {
        const newUser = await enqueteService.createUser(titulo, inicio, fim);
        res.status(201).json(newEnquete);
      } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).json({ error: 'Ocorreu um erro durante a criação do usuário.' });
      }
    }
  
    async getUserById(req, res) {
      const { id } = req.params;
  
      try {
        const enquete = await enqueteService.getUserById(id);
        res.status(200).json(user);
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        res.status(500).json({ error: 'Ocorreu um erro durante a busca do usuário.' });
      }
    }
  }
  
  module.exports = new EnqueteController();
  