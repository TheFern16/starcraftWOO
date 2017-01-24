angular.module('starCraftWoo.services', [])

.factory('Units', function($http) {

  var getAllTerran = function() {
    return $http({
      method: 'GET',
      url: '/api/terran'
    }).then(function(resp) {
      return resp.data;
    });
  };

  var getAllZerg = function() {
    return $http({
      method: 'GET',
      url: '/api/zerg'
    });
  };

  var getAllProtoss = function() {
    return $http({
      method: 'GET',
      url: '/api/protoss'
    });
  };

  return {
    getAllTerran: getAllTerran,
    getAllZerg: getAllZerg,
    getAllProtoss: getAllProtoss
  };
});