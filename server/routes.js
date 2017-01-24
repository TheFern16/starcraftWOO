var Terran = require('../public/models/terran/terran.js');

  module.exports = function(app) {

    app.get('/api/terran', function(req, res) {
      Terran.find(function(err, ter) {
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