'use strict';

// Load Controller
require('./home.controller');

// Load Template
require('./home.html');

angular.module('Sample')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home.html',
        controller: 'HomeCtrl'
      });
  });
