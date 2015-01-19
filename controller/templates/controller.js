'use strict';

angular.module('<%= _.camelize(projectName) %>')
  .controller('<%= _.classify(name) %>Ctrl', function($scope) {
    $scope.yeogurt = 'awesome';
  });
