angular.module('starCraftWoo', ['ngRoute', 'MainCtrl', 'TerranCtrl', 'TerranService'])

.config(function($routeProvider, $locationProvider) {

    $routeProvider

    .when('/', {
      templateUrl: 'public/index.html',
      controller: 'MainController'
    })

    .when('/terran', {
      templateUrl: 'public/models/terran/terran.html',
      controller: 'TerranController'
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);

  })