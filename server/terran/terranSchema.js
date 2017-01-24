var mongoose = require('mongoose');

var terranSchema = mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Terran', terranSchema);
