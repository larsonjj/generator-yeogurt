'use strict';

angular.module('<%= _.classify(projectName) %>')

.controller('SettingsCtrl', [function($scope, User) {

    $scope.user = User.getUser();

}]);
