'use strict';

// Load Controller
require('./<%= _.slugify(name.toLowerCase()) %>.controller');

angular.module('<%= _.classify(projectName) %>')
  .config(function($routeProvider) {
    $routeProvider
      .when('<%= moduleURL %>', {
        templateUrl: '<%= htmlURL %>',
        controller: '<%= _.classify(name) %>Ctrl'
      });
  });
