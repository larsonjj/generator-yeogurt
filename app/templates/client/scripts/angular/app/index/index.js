'use strict';

angular.module('<%= _.camelize(projectName) %>')
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '/app/index/index.html',
                    controller: 'IndexCtrl'
                });
        }
    ]);
