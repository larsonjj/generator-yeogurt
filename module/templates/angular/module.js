'use strict';

angular.module('<%= _.camelize(projectName) %>')
  .config(function($routeProvider) {
    $routeProvider
      .when('<%= moduleURL %>', {
        templateUrl: '<%= htmlURL %>',
        controller: '<%= _.classify(name) %>Ctrl'
      });
  });
