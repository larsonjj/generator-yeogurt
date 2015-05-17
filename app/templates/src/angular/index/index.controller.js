'use strict';

var angular = require('angular');

angular.module('<%= _.camelize(projectName) %>')
  .controller('IndexCtrl', function($scope) {
    $scope.yeogurt = 'awesome';
  });
