'use strict';

angular.module('<%= _.classify(projectName) %>')

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/templates/index.html',
                controller: 'IndexCtrl'
            });
    }
]);
