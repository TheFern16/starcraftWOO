var Q = require('q');
var Terran = require('./terranSchema.js');

var findAllUnits = Q.nbind(Terran.find, Terran)

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