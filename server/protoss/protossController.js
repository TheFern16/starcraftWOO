var Q = require('q');
var Protoss = require('./protossSchema.js');

var findAllUnits = Q.nbind(Protoss.find, Protoss);

module.exports = {

  allUnits: function(req, res, next) {
    findAllUnits({})
      .then(function(units) {
        res.json(units);
      })
      .fail(function(error) {
        next(error);
      });
  }

}