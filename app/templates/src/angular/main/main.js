// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

// Main module. Must be loaded first
angular
  .module('<%= _.camelize(projectName) %>', [
    'ngRoute'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
  }]);

// Screens and Modules
require('../_screens/index/index');

console.log('Welcome to Yeogurt!');
