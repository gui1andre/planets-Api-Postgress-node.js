const Satelite = require("../models/satelite");
const Planet = require("../models/planets");

module.exports = {
  async store(req, res) {
    try {
      const { planetId } = req.params;
      const { name, serial_number } = req.body;

      const planet = await Planet.findByPk(planetId);



      const satelite = await Satelite.create({ name, serial_number, planetId });

      return res.json(satelite);
    } catch (error) {
      return res.json(error);
    }
  },
  async getAll(req, res) {
    try {

      const { planetId } = await req.params;

      if (!planetId) {
        res.send("Esse Planeta não existe!");
      }

      const planet = await Planet.findByPk(planetId, {
        include: Satelite,
      });

      return res.json(planet);



    } catch (error) {
      return res.json(error);
    }

  }
};
