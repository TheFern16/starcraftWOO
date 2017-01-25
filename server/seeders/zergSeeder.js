var Zerg = require('../zerg/zergSchema');

var mongoose = require('mongoose');

mongoose.connect('localhost:8000');

var zergUnits = [
  new Zerg = ({
    name: "Larva"
  }),
  new Zerg = ({
    name: "Drone"
  }),
  new Zerg = ({
    name: "Overlord"
  }),
  new Zerg = ({
    name: "Zergling"
  }),
  new Zerg = ({
    name: "Queen"
  }),
  new Zerg = ({
    name: "Hydralisk"
  }),
  new Zerg = ({
    name: "Baneling"
  }),
  new Zerg = ({
    name: "Overseer"
  }),
  new Zerg = ({
    name: "Roach"
  }),
  new Zerg = ({
    name: "Infestor"
  }),
  new Zerg = ({
    name: "Mutalisk"
  }),
  new Zerg = ({
    name: "Corruptor"
  }),
  new Zerg = ({
    name: "Nydus Worm"
  }),
  new Zerg = ({
    name: "Ultralisk"
  }),
  new Zerg = ({
    name: "Brood Lord"
  }),
  new Zerg = ({
    name: "Swarmm Host"
  }),
  new Zerg = ({
    name: "Viper"
  }),
  new Zerg = ({
    name: "Ravager"
  }),
  new Zerg = ({
    name: "Lurker"
  }),

]

var done = 0;

for (var i = 0; i < zergUnits.length; i++) {
  zergUnits[i].save(function(err, result) {
    done++;
    if (done === zergUnits.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}

mongoose.disconnect();