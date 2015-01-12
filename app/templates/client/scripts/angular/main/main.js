'use strict';

// Declare app level module which depends on views, and components
angular.module('<%= _.classify(projectName) %>', [
    '<%= _.classify(projectName) %>.routes',
    'ngSanitize',
    'ngRoute'<% if (useServer) { %>,
    'ngResource'<% } %><% if (useAuth) { %>,
    'ngCookie'<% } %>
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

.factory('authInterceptor', function($rootScope, $q, $cookieStore, $location) {
    return {
        // Add authorization token to headers
        request: function(config) {
            config.headers = config.headers || {};
            if ($cookieStore.get('token')) {
                config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
            }
            return config;
        },

        // Intercept 401s and redirect you to login
        responseError: function(response) {
            if (response.status === 401) {
                $location.path('/login');
                // remove any stale tokens
                $cookieStore.remove('token');
                return $q.reject(response);
            } else {
                return $q.reject(response);
            }
        }
    };
})

.run(function($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function(event, next) {
        Auth.isLoggedInAsync(function(loggedIn) {
            if (next.authenticate && !loggedIn) {
                $location.path('/login');
            }
        });
    });
})<% } %>;
