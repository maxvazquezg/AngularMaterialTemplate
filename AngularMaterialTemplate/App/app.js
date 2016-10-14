var app = angular.module('App', ['ngRoute', 'ngMaterial'])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
          templateUrl: 'views/home.html',
          controller: 'homeController'
      })
      .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'aboutController'
      })
      .otherwise({
          redirectTo: '/'
      });
}])
.controller('mainController', function ($scope, $mdSidenav) {
    $scope.message = "Hola AngularJS";
    $scope.toggleLeft = buildToggler('left');

    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        }
    }
});;