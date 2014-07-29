/**
 * Starts up a development server that watches for local file changes and automatically reloads them to the browser.
 */
'use strict';

var taskConfig = function(grunt) {
    grunt.registerTask('serve', 'Open a development server within your browser', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build',<% if (useServer) { %>
            'env:all', 'env:prod', 'express:dist', 'open', 'keepalive'<% } else { %> 'connect:dist:keepalive'<% } %>]);
        }

        grunt.task.run([
            'clean:server',<% if (useServer) { %>
            'env:all',<% } %>
            'injector',
            'copy:server',<% if (jsOption === 'Browserify') { %>
            'browserify:server',
            'exorcise:server',<% } %><% if (jsTemplate === 'Lo-dash (Underscore)') { %>
            'jst:server',<% } else if (jsTemplate === 'Handlebars') { %>
            'handlebars:server',<% } else if (jsTemplate === 'Jade') { %>
            'jade:server',<% } %><% if (htmlOption === 'Jade' && !useServer ) { %>
            'jade:server',<% } else if (htmlOption === 'Swig' && !useServer ) {  %>
            'swig:server',<% } %><% if (useDashboard) { %>
            'dashboard:server',<% } %><% if (useKss) { %>
            'kss:server',<% } %><% if (useJsdoc) { %>
            'jsdoc:server',<% } %><% if (cssOption === 'Less') { %>
            'less:server',<% } %><% if (cssOption === 'Sass') { %>
            'sass:server',<% } %>
            'clean:temp',<% if (useServer) { %>
            'express:server',
            'wait',
            'open'<% } else { %>
            'connect:server'<% } %>
        ]);
        <% if (useKss || useJsdoc) { %>
        if (target === 'docs') {
            return grunt.task.run(['listen']);
        }

        return grunt.task.run(['watch']);
        <% } else { %>
        return grunt.task.run(['watch']);
        <% } %>
    });
};

module.exports = taskConfig;
