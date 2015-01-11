'use strict';

angular.module('<%= _.classify(projectName) %>.index', ['ngRoute'])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/templates/index.html',
            controller: 'IndexCtrl'
        });
    }
]);
