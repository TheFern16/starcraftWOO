angular.module('TerranService', []).factory('Terran', ['$http', function($http) {

  return {
    get: function() {
      return: $http.get('/api/terran');
    },

    create: function(terranData) {
      return $http.post('/api/terran', terranData);
    },

    delete: function(id) {
      return $http.delete('/api/terran/' + id);
    }
  }

}]);