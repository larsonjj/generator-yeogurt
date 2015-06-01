'use strict';

// Load Index Controller
require('./index.controller');

angular.module('<%= _.camelize(projectName) %>')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/_screens/index/index.html',
        controller: 'IndexCtrl'
      });
  });
