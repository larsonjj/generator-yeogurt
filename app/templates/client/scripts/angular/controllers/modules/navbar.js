'use strict';

angular.module('<%= _.classify(projectName) %>')

.controller('NavbarCtrl', [function($scope, User) {

    $scope.loggedIn = User.getUser().loggedIn;
    $scope.user = User.getUser();

}]);
