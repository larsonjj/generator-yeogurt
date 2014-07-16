/**
 * Starts up a development server that watches for local file changes and automatically reloads them to the browser.
 */
'use strict';

module.exports = function(grunt) {
    grunt.registerTask('serve', 'Open a development server within your browser', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build',<% if (useServer) { %>
            'express:dist', 'open', 'keepalive'<% } else { %> 'connect:dist:keepalive'<% } %>]);
        }

        grunt.task.run([
            'clean:server',
            'copy:server',<% if (jshint) { %>
            'jshint:test',<% } %><% if (jsOption === 'Browserify') { %>
            'browserify:server',
            'exorcise:server',<% } %><% if (jsTemplate === 'Lo-dash (Underscore)') { %>
            'jst:server',<% } else if (jsTemplate === 'Handlebars') { %>
            'handlebars:server',<% } else if (jsTemplate === 'Jade') { %>
            'jade:server',<% } %><% if (htmlOption === 'Jade' && !useServer ) { %>
            'jade:server',<% } else if (htmlOption === 'Swig' && !useServer ) {  %>
            'swig:server',<% } %><% if (useDashboard) { %>
            'dashboard:server',<% } %><% if (useKss) { %>
            'kss:server',<% } %><% if (useJsdoc) { %>
            'jsdoc:server',<% } %><% if (cssOption === 'LESS') { %>
            'less:server',<% } %><% if (cssOption === 'SASS') { %>
            'sass:server',<% } %>
            'clean:temp',<% if (useServer) { %>
            'express:server',
            'open',
            'wait',<% } else { %>
            'connect:server'<% } %>
        ]);
        <% if (useKss || useJsdoc) { %>
        if (target === 'docs') {
            return grunt.task.run(['listen']);
        }

        return grunt.task.run(['watch']);
        <% } else { %>
        return grunt.task.run(['listen']);
        <% } %>
    });
};