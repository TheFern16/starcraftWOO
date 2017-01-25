angular.module('starCraftWoo.terran', [])

.controller('TerranController', function($scope, Units) {
  $scope.data = {}

  var initializeLinks = function() {
    Units.getAllTerran()
    .then(function(units) {
      $scope.data.units = units;
    })
    .catch(function(error) {
      console.error(error);
    });
  };
  // initializeLinks();
})