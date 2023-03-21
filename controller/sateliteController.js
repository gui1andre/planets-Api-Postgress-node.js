const Satelite = require("../models/satelite");
const Planet = require("../models/planets");

module.exports = {
  async store(req, res) {
    try {
      const { planetId } = req.params;
      const { name, serial_number } = req.body;
      const planet = await Planet.findByPk(planetId);
      if (!planet) {
        return res.send("Planeta não encontrado");
      }
      const satelite = await Satelite.create({ name, serial_number, planetId });
      return res.json(satelite);
    } catch (error) {
      return res.json(error);
    }
  },
  async getAll(req,res){
   try {
    const {planetId} = req.params;
    const planet = await Planet.findByPk(planetId, {
        include: Satelite,
    });
    return res.json(planet);

   } catch (error) {
    return res.json(error);
   }

  }
};
