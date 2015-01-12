'use strict';

angular.module('<%= _.classify(projectName) %>.routes', [
    'ngRoute',
    '<%= projectName %>.index'
])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templates: {
                    layout: '/templates/layouts/default.html',
                    content: '/templates/index.html'
                },
                controller: 'IndexCtrl'
            })<% if (useAuth) { %>
            .when('/login', {
                templates: {
                    layout: '/templates/layouts/default.html',
                    content: '/templates/account/login.html'
                },
                controller: 'LoginCtrl'
            })
            .when('/forgot', {
                templates: {
                    layout: '/templates/layouts/default.html',
                    content: '/templates/account/forgot.html'
                },
                controller: 'ForgotCtrl'
            })
            .when('/signup', {
                templates: {
                    layout: '/templates/layouts/default.html',
                    content: '/templates/account/signup.html'
                },
                controller: 'SignupCtrl'
            })
            .when('/settings', {
                templates: {
                    layout: '/templates/layouts/default.html',
                    content: '/templates/account/settings.html'
                },
                controller: 'SettingsCtrl'
            })
            .when('/reset:token', {
                templates: {
                    layout: '/templates/layouts/default.html',
                    content: '/templates/account/reset.html'
                },
                controller: 'ResetCtrl'
            })<% } %>;
    }
]);
