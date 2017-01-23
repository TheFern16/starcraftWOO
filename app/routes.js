var Terran = require('./models/terran');

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
      res.sendfile('./public/views/index.html');
    });

  }