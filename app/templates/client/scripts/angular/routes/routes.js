'use strict';

angular.module('<%= _.camelize(projectName) %>')

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/templates/index.html',
                controller: 'IndexCtrl'
            });
    }
]);
