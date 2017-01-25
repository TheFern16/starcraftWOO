angular.module('starCraftWoo.zerg', [])

.controller('ZergController', function($scope, Units) {

  $scope.data = {}

  var initializeLinks = function() {
    Units.getAllZerg()
    .then(function(units) {
      $scope.data.units = units;
    })
    .catch(function(error) {
      console.error(error);
    });
  };
  // initializeLinks();

})