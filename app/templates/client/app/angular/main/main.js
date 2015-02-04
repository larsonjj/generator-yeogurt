// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

angular.module('<%= _.camelize(projectName) %>', [
  'ngRoute'
])
  .config(['$routeProvider'<% if (useServer) { %>, '$locationProvider'<% } %>, function($routeProvider<% if (useServer) { %>, $locationProvider<% } %>) {
    $routeProvider.otherwise({redirectTo: '/'});<% if (useServer) { %>

    $locationProvider.html5Mode(true);<% } %>
  }]);

console.log('Welcome to Yeogurt!');
