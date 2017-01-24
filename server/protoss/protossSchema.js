var mongoose = require('mongoose');

var protossSchema = mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Protoss', protossSchema);
