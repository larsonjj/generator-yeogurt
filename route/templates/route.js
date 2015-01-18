'use strict';

angular.module('<%= _.camelize(projectName) %>')
    .config(function($routeProvider) {
        $routeProvider
            .when('<%= routeURL %>', {
                templateUrl: '<%= htmlURL %>',
                controller: '<%= _.classify(name) %>Ctrl'
            });
    });
