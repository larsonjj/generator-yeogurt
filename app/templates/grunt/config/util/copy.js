/**
 * Configuration for copy task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('copy', {
        server: {
            files: [{
                expand: true,
                cwd: '<%%= yeogurt.client %>/',
                dest: '<%%= yeogurt.staticServer %>/',
                src: [
                    'scripts/**/*.js',<% if (useDashboard) { %>
                    'dashboard/**/*.*',<% } %><% if (jsOption === 'browserify') { %>
                    '!scripts/app.js',
                    '!scripts/main.js',<% } %>
                    'bower_components/**/*.{js,map,css,woff,otf,ttf,eot,svg}',<% if (useKss) { %>
                    'docs/styleguide/public/images',<% } %><% if (singlePageApplication) { %>
                    '*.html',<% } %>
                    'styles/**/*.css',
                    'images/**',
                    '*.{ico,png,txt}',
                    'styles/fonts/**/*.{woff,otf,ttf,eot,svg}',<% if (jsFramework === 'backbone' && !useServer || jsFramework === 'react' && !useServer) { %>
                    '*.html'<% } %>
                ]
            }]
        },
        dist: {
            files: [{
                expand: true,
                cwd: '<%%= yeogurt.client %>/',
                dest: '<%%= yeogurt.dist %>/',
                src: [<% if (jsOption === 'requirejs') { %>
                    'bower_components/requirejs/require.js',<% } %><% if (useModernizr) { %>
                    'bower_components/modernizr/modernizr.js',<% } %>
                    'bower_components/**/*.{woff,otf,ttf,eot,svg}',<% if (useDashboard) { %>
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
            }<% } %>]
        }
    });

};

module.exports = taskConfig;
