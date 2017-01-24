var terranController = require('../terran/terranController.js');
var protossController = require('../protoss/protossController.js');
var zergController = require('../zerg/zergController.js')
var racesController = require('../races/racesController.js');

module.exports = function (app, express) {

  app.get('/api/terran', terranController.allUnits);

  app.get('/api/zerg', zergController.allUnits);

  app.get('/api/zerg', protossController.allUnits);

};

