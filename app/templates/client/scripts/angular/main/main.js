'use strict';

// Declare app level module which depends on views, and components
angular.module('<%= _.classify(projectName) %>', [
    'ngSanitize',
    'ngRoute'
])

.config(['$routeProvider'<% if (useServer) { %>, '$locationProvider'<% } %><% if (useAuth) { %>, '$httpProvider'<% } %>, function($routeProvider<% if (useServer) { %>, $locationProvider<% } %><% if(useAuth) { %>, $httpProvider<% } %>) {
    $routeProvider.otherwise({redirectTo: '/'});<% if (useServer) { %>

    $locationProvider.html5Mode(true);<% } %><% if(useAuth) { %>
    $httpProvider.interceptors.push('authInterceptor');<% } %>
}])

.controller('<%= _.classify(projectName) %>Ctrl', [
    '$rootScope',
    '$route',
    function ($rootScope, $route) {
        $rootScope.$on('$routeChangeStart', function(event, next, current) {
            if (!next.templates) { return; }
            // Add 'templates' data to route scope
            $rootScope.templates = next.templates;
        });
    }
])<% if(useAuth) { %>

.factory('authInterceptor', function($rootScope, $q, $location) {
    return {
        // Add authorization token to headers
        request: function(config) {
            config.headers = config.headers || {};
            var token = $.cookie('token');
            if (token) {
                config.headers.Authorization = 'Bearer ' + token;
            }
            return config;
        },

        // Intercept 401s and redirect you to login
        responseError: function(response) {
            if (response.status === 401) {
                // Remove auth token
                $.removeCookie('token');
                return $q.reject(response);
            } else {
                return $q.reject(response);
            }
        }
    };
})

.run(function($rootScope, $location, User) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function(event, next) {
        // Check to see if user is authenticated
        User.isAuthenticated();
    });
})<% } %>;

console.log('Welcome to Yeogurt!');
