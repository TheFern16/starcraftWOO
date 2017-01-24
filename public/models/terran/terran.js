var mongoose = require('mongoose');

var terranSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Terran', terranSchema);
