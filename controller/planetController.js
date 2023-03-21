const Planet = require("../models/planets");

module.exports = {
  async store(req, res) {
    const { name, position } = req.body;
    try {
      const planet = await Planet.create({ name, position });

      return res.json(planet);
    } catch (error) {
      console.log(error);
    }
  },

  async getAll(req, res) {
    try {
      const planets = await Planet.findAll();
      return res.json(planets);
    } catch (error) {
      return res.json(error);
    }
  },

  async update(req, res) {
    try {
      const { name, position } = req.body;
      await Planet.update({ name, position }, { where: { id: req.params.id } });
      return res.status(200).send('Atualizado com sucesso');
    } catch (error) {
        return res.json(error);
    }
  },
  async delete(req, res){
    try {
        await Planet.destroy({where: {id: req.params.id}});
        return res.send('Removido com sucesso');
    } catch (e) {
        return res.json(e);
    }
  }
};
