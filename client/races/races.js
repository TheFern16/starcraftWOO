angular.module('starCraftWoo.races', [])

.controller('RacesController', function($scope, $location) {
    $scope.changeView = function(view) {
      $location.path(view);
    }
    $scope.tagline = 'Choose your race.';

})