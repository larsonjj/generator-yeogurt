'use strict';

angular.module('<%= _.classify(projectName) %>', [
    '<%= _.classify(projectName) %>.routes'
])

.controller('SettingsCtrl', [function($scope, User) {

    $scope.user = User.getUser();

}]);
