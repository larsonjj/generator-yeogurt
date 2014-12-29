/**
 * Configuration for copy task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('copy', {
        dist: {
            files: [{
                expand: true,
                cwd: '<%%= yeogurt.client %>/',
                dest: '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>',
                src: [<% if (jsOption === 'requirejs') { %>
                    'bower_components/requirejs/require.js',<% } %><% if (useDashboard) { %>
                    'dashboard/**/*.*',<% } %><% if (singlePageApplication) { %>
                    '*.html',<% } %><% if (useKss) { %>
                    'docs/styleguide/public/images',<% } %>
                    '!*.js',
                    '*.{ico,png,txt}',
                    'images/**/*.{webp}',
                    'styles/fonts/**/*.{woff,otf,ttf,eot,svg}'
                ]
            }<% if (useServer && singlePageApplication) { %>, {
                expand: true,
                cwd: 'server/templates/',
                dest: '.tmp',
                src: [
                    'index.html'
                ]
            }<% } %><% if (useServer) { %>, {
                expand: true,
                cwd: './',
                dest: '<%%= yeogurt.dist %>/',
                src: [
                    '<%%= yeogurt.server %>/**/*',
                    'server.js',
                    'package.json'
                ]
            }<% } %>]
        }
    });

};

module.exports = taskConfig;
