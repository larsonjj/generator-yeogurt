/**
 * serve.js
 * Starts up a development server that watches for local file changes and automatically reloads them to the browser.
 */
'use strict';

module.exports = function(grunt) {
    grunt.registerTask('serve', 'Open a development server within your browser', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'copy:server',<% if (jshint) { %>
            'jshint:test',<% } %><% if (jsOption === 'Browserify') { %>
            'browserify:server',
            'exorcise:server',<% } %><% if (htmlOption === 'Jade') { %>
            'jade:server',<% } else if(htmlOption === 'Swig') {  %>
            'swig:server',<% } %><% if (useDashboard) { %>
            'dashboard:server',<% } %><% if (cssOption === 'LESS') { %>
            'less:server',<% if (ieSupport) { %>
            'less:serverPrint',<% } %><% } %><% if (cssOption === 'SCSS') { %>
            'sass:server',<% if (ieSupport) { %>
            'sass:serverPrint',<% } %><% } %>
            'clean:temp',
            'connect:livereload',
            'watch'
        ]);
    });
};