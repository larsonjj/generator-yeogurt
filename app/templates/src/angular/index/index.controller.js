'use strict';

angular.module('<%= _.camelize(projectName) %>')
  .controller('IndexCtrl', function($scope) {
    $scope.yeogurt = 'awesome';
  });
