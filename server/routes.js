var terran = require('../client/terran/terran.js');
var races = requre('../client/races/races.js')

  module.exports = function(app) {

    app.get('/api/terran', function(req, res) {
      terran.find(function(err, ter) {
        if (err) {
          res.send(err);
        } else {
          res.json(ter);
        }
      });
    });

    app.get('*', function(req, res) {
      res.sendFile('../client/races/races.html');
    });

  }