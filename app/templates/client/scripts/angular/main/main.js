'use strict';

// Declare app level module which depends on views, and components
angular.module('<%= _.classify(projectName) %>', [
  'ngRoute',
  '<%= _.classify(projectName) %>.index'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
