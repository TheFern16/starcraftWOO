angular.module('starCraftWoo', ['ngRoute', 'MainCtrl', 'TerranCtrl', 'TerranService'])

.config(function($routeProvider, $locationProvider) {

    $routeProvider

    .when('/', {
      templateUrl: 'races/races.html',
      controller: 'RacesController'
    })

    .when('/terran', {
      templateUrl: 'terran/terran.html',
      controller: 'TerranController'
    })

    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);

  })