angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {

    $routeProvider

    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })

    .when('/terran', {
      templateUrl: 'views/terran.html',
      controller: 'TerranController'
    });

    $locationProvider.html5Mode(true);

  }])