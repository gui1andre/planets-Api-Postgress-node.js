const Planet = require('../models/planets');
const Satelite = require('../models/satelite');

Planet.hasOne(Satelite, {onDelete: 'CASCADE', onUpdate: 'CASCADE'});
Satelite.belongsTo(Planet,{foreingKey: 'planetId', as: 'planet'} );


module.exports = {Satelite, Planet};