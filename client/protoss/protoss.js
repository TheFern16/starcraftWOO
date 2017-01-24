angular.module('starCraftWoo.protoss', [])

.controller('ProtssController', function($scope, Units) {

  $scope.data = {}

  var initializeLinks = function() {
    Units.getAllProtoss()
    .then(function(units) {
      $scope.data.units = units;
    })
    .catch(function(error) {
      console.error(error);
    });
  };
  initializeLinks();

})