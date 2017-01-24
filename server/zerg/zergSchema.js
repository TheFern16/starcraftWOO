var mongoose = require('mongoose');

var zergSchema = mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Zerg', zergSchema);
