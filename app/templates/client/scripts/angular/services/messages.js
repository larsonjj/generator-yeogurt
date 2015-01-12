'use strict';

angular.module('<%= _.classify(projectName) %>')
.factory('Messages', function Messages($rootScope) {
    $rootScope.currentMessages = {};

    $rootScope.$on('$routeChangeSuccess', function() {
        $rootScope.currentMessages = {};
    });

    return {
        setMessages: function(data) {
            if (!$.isEmptyObject(data)) {
                $rootScope.currentMessages = data;
            }
        },
        getMessages: function() {
            return $rootScope.currentMessages;
        }
    };
});
