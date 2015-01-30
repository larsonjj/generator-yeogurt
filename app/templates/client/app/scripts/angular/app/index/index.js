'use strict';

angular.module('<%= _.camelize(projectName) %>')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/index/index.html',
        controller: 'IndexCtrl'
      });
  });
