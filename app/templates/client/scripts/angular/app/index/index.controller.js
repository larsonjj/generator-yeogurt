'use strict';

angular.module('<%= _.camelize(projectName) %>')

.controller('IndexCtrl', ['$scope', function($scope) {
    $scope.yeogurt = 'awesome';
}]);
