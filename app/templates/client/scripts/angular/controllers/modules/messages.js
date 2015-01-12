'use strict';

angular.module('<%= _.classify(projectName) %>')

.controller('MessagesCtrl', [function($scope, Messages) {
    $scope.messages = Messages.get(messages);
}]);
