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
                    'scripts/**/*.<% if (jsFramework === 'Backbone + React' && jsOption === 'RequireJS') { %>{js,jsx}<% } else { %>js<% } %>',<% if (useDashboard) { %>
                    'dashboard/**/*.*',<% } %><% if (jsOption === 'Browserify') { %>
                    '!scripts/app.js',
                    '!scripts/main.js',<% } %>
                    'bower_components/**/*.{js,map}',
                    'bower_components/**/*.{woff,otf,ttf,eot,svg}',<% if (useKss) { %>
                    'docs/styleguide/public/images',<% } %>
                    'images/**',
                    '*.{ico,png,txt}',<% if (htaccess) { %>
                    '.htaccess',<% } %>
                    'styles/fonts/**/*.{woff,otf,ttf,eot,svg}',<% if (htmlOption === 'HTML' || (/Backbone/i).test(jsFramework) && !useServer) { %>
                    '*.html'<% } %>
                ]
            }<% if (cssOption === 'CSS') { %>, {
                expand: true,
                cwd: '<%%= yeogurt.client %>/',
                dest: '<%%= yeogurt.staticServer %>/',
                src: [
                    'styles/**/*.css',
                    'bower_components/**/*.{css,map}'
                ]
            }<% } %>]
        },
        dist: {
            files: [{
                expand: true,
                cwd: '<%%= yeogurt.client %>/',
                dest: '<%%= yeogurt.dist %>/',
                src: [<% if (jsOption === 'RequireJS') { %>
                    'bower_components/requirejs/require.js',<% } %>
                    'bower_components/modernizr/modernizr.js',
                    'bower_components/**/*.{woff,otf,ttf,eot,svg}',<% if (useDashboard) { %>
                    'dashboard/**/*.*',<% } %>
                    'bower_components/jquery/jquery.min.*',<% if (htmlOption === 'HTML' || (/Backbone/i).test(jsFramework) && !useServer) { %>
                    '*.html',<% } %><% if (useKss) { %>
                    'docs/styleguide/public/images',<% } %>
                    '!*.js',
                    '*.{ico,png,txt}',<% if (htaccess) { %>
                    '.htaccess',<% } %>
                    'images/**/*.{webp}',
                    'styles/fonts/**/*.{woff,otf,ttf,eot,svg}'
                ]
            }<% if (useServer && structure === 'Single Page Application') { %>, {
                expand: true,
                cwd: 'server/views/',
                dest: '.tmp',
                src: [
                    'index.html'
                ]
            }<% } %>]
        }
    });

};

module.exports = taskConfig;
