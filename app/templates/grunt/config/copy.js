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
                    'scripts/**/*.<% if (jsFramework === 'react' && jsOption === 'requirejs') { %>{js,jsx}<% } else { %>js<% } %>',<% if (useDashboard) { %>
                    'dashboard/**/*.*',<% } %><% if (jsOption === 'browserify') { %>
                    '!scripts/app.js',
                    '!scripts/main.js',<% } %>
                    'bower_components/**/*.{js,map}',
                    'bower_components/**/*.{woff,otf,ttf,eot,svg}',<% if (useKss) { %>
                    'docs/styleguide/public/images',<% } %>
                    'images/**',
                    '*.{ico,png,txt}',
                    'styles/fonts/**/*.{woff,otf,ttf,eot,svg}',<% if (htmlOption === 'html' || jsFramework === 'backbone' && !useServer || jsFramework === 'react' && !useServer) { %>
                    '*.html'<% } %>
                ]
            }<% if (cssOption === 'css') { %>, {
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
                src: [<% if (jsOption === 'requirejs') { %>
                    'bower_components/requirejs/require.js',<% } %>
                    'bower_components/modernizr/modernizr.js',
                    'bower_components/**/*.{woff,otf,ttf,eot,svg}',<% if (useDashboard) { %>
                    'dashboard/**/*.*',<% } %>
                    'bower_components/jquery/jquery.min.*',<% if (htmlOption === 'html' || jsFramework === 'backbone' && !useServer || jsFramework === 'react' && !useServer) { %>
                    '*.html',<% } %><% if (useKss) { %>
                    'docs/styleguide/public/images',<% } %>
                    '!*.js',
                    '*.{ico,png,txt}',
                    'images/**/*.{webp}',
                    'styles/fonts/**/*.{woff,otf,ttf,eot,svg}'
                ]
            }<% if (useServer && singlePageApplication) { %>, {
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
