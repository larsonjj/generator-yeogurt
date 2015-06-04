// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var angular = require('angular');

// Include angular routing module
require('angular-route');

// Main module. Must be loaded before screens and modules
angular
  .module('<%= _.camelize(projectName) %>', [
    'ngRoute'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
  }]);

// Include Screens and Modules
require('../_screens/home/home');

console.log('Welcome to Yeogurt!');
