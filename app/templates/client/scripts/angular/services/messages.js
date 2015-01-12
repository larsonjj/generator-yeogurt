angular.module('<%= _.classify(projectName) %>')
.factory('Messages', function Messages($rootScope, $scope) {
    $scope.currentMessages = {};

    $rootScope.$on('$routeChangeSuccess', function() {
        $scope.currentMessages = {};
    });

    return {
        setMessages: function(data) {
            if (!$.isEmptyObject(data)) {
                $scope.currentMessages = data;
            }
        },
        getMessages: function() {
            return $scope.currentMessages;
        }
    };
});
