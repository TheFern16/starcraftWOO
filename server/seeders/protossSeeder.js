var Protoss = require('../protoss/protossSchema');

var mongoose = require('mongoose');

mongoose.connect('localhost:8000');

var protossUnits = [
  new Protoss({
    name: "Probe"
  }),
  new Protoss({
    name: "Zealot"
  }),
  new Protoss({
    name: "Stalker"
  }),
  new Protoss({
    name: "Sentry"
  }),
  new Protoss({
    name: "Observer"
  }),
  new Protoss({
    name: "Immortal"
  }),
  new Protoss({
    name: "Warp Prism"
  }),
  new Protoss({
    name: "Colossus"
  }),
  new Protoss({
    name: "Phoenix"
  }),
  new Protoss({
    name: "Void Ray"
  }),
  new Protoss({
    name: "High Templar"
  }),
  new Protoss({
    name: "Dark Templar"
  }),
  new Protoss({
    name: "Archon"
  }),
  new Protoss({
    name: "Carrier"
  }),
  new Protoss({
    name: "Mothership"
  }),
  new Protoss({
    name: "Mothership Core"
  }),
  new Protoss({
    name: "Oracle"
  }),
  new Protoss({
    name: "Tempest"
  }),
  new Protoss({
    name: "Adept"
  }),
  new Protoss({
    name: "Disruptor"
  }),

]

var done = 0;

for (var i = 0; i < protossUnits.length; i++) {
  protossUnits[i].save(function(err, result) {
    done++;
    if (done === protossUnits.length) {
      exit()
    }
  });
}

function exit() {
  mongoose.disconnect();
}
