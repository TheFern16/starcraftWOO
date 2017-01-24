angular.module('starCraftWoo', [
  'starCraftWoo.races',
  'starCraftWoo.terran',
  'ngRoute'
  ])

.config(function($routeProvider, $locationProvider) {

    $routeProvider

    .when('/', {
      templateUrl: '/client/races/races.html',
      controller: 'RacesController'
    })

    .when('/terran', {
      templateUrl: '/client/terran/terran.html',
      controller: 'TerranController'
    })

    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);

  })