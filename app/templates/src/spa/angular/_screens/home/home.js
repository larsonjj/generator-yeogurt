'use strict';

// Load home Controller
require('./home.controller');

angular.module('<%= _.camelize(projectName) %>')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/_screens/home/home.html',
        controller: 'HomeCtrl'
      });
  });
