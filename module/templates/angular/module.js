'use strict';

// Load Controller
require('./<%= _.slugify(name.toLowerCase()) %>.controller');

// Load Template
require('./<%= _.slugify(name.toLowerCase()) %>.html');

angular.module('<%= _.classify(projectName) %>')
  .config(function($routeProvider) {
    $routeProvider
      .when('<%= moduleURL %>', {
        templateUrl: '_.slugify(name.toLowerCase()) %>',
        controller: '<%= _.classify(name) %>Ctrl'
      });
  });
