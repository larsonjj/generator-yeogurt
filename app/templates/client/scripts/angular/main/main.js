'use strict';

// Declare app level module which depends on views, and components
angular.module('<%= _.classify(projectName) %>', [
    'ngRoute'
])

.config(['$routeProvider'<% if (useServer) { %>, '$locationProvider'<% } %>, function($routeProvider<% if (useServer) { %>, $locationProvider<% } %>) {
    $routeProvider.otherwise({redirectTo: '/'});<% if (useServer) { %>

    $locationProvider.html5Mode(true);<% } %>
}]);
