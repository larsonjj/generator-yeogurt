'use strict';

var angular = require('angular');

require('./index.controller');

angular.module('<%= _.camelize(projectName) %>')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/_screens/index/index.html',
        controller: 'IndexCtrl'
      });
  });
