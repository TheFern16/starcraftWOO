var Q = require('q');
var Zerg = require('./zergSchema.js');

var findAllUnits = Q.nbind(Zerg.find, Zerg);

module.exports = {

  allUnits: function(req, res, next) {
    findAllUnits({})
      .then(function(units) {
        res.json(units)
      })
      .fail(function(error) {
        next(error);
      });
  }

}