var mongoose = require('mongoose');

var RacesSchema = new mongoose.Schema({
  raceName: {
    protoss: String,
    terran: String,
    zerg: String
  }

})

module.exports = mongoose.model('races', RacesSchema);