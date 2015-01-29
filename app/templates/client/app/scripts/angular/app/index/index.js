'use strict';

angular.module('<%= _.camelize(projectName) %>')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/home/home.html',
        controller: 'IndexCtrl'
      });
  });
