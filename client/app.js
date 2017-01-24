angular.module('starCraftWoo', [
  'starCraftWoo.races',
  'starCraftWoo.terran',
  'starCraftWoo.protoss',
  'starCraftWoo.zerg',
  'ngRoute'
  ])

.config(function($routeProvider, $locationProvider) {

    $routeProvider

    .when('/', {
      templateUrl: './races/races.html',
      controller: 'RacesController'
    })

    .when('/terran', {
      templateUrl: './terran/terran.html',
      controller: 'TerranController'
    })

    .when('/zerg', {
      templateUrl: './zerg/zerg.html',
      controller: 'ZergController'
    })

    .when('/protoss', {
      templateUrl: './protoss/protoss.html',
      controller: 'ProtossController'
    })

  });