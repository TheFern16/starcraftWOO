angular.module('starCraftWoo',
  ['ngRoute',
  'starCraftWoo.races',
  'starCraftWoo.terran'
  ])

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