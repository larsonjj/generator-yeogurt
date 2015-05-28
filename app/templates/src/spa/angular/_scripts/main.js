// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var angular = require('angular');

// Require angular routing module
require('angular-route');

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

// Load Templates
// templates are compiled by the 'ngtemplates:compile' grunt task
require('../../tmp/scripts/templates');

console.log('Welcome to Yeogurt!');
