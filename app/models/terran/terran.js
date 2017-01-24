var mongoose = require('mongoose');

module.exports = mongoose.model('Terran', {
  name: { type: String, default: '' }
});