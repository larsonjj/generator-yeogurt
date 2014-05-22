/**
 * copy.js
 * Configuration for copy task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('copy', {
        server: {
            files: [{
                expand: true,
                cwd: '<%%= yeogurt.dev %>/',
                dest: '<%%= yeogurt.server %>/',
                src: [
                    'scripts/{,*/}{,*/}*.<% if (jsFramework === 'Backbone + React' && jsOption === 'RequireJS') { %>{js,jsx}<% } else { %>js<% } %>'<% if (useDashboard) { %>,
                    'dashboard/**/*.*'<% } %><% if (jsOption === 'Browserify') { %>,
                    '!scripts/app.js',
                    '!scripts/main.js'<% } %>
                ]
            },<% if (htmlOption === 'None (Vanilla HTML)' || (/Backbone/i).test(jsFramework)) { %> {
                expand: true,
                cwd: '<%%= yeogurt.dev %>/',
                dest: '<%%= yeogurt.server %>/',
                src: [
                    '*.html'
                ]
            }, <% } %>{
                expand: true,
                cwd: '<%%= yeogurt.dev %>/',
                dest: '<%%= yeogurt.server %>/',
                src: [
                    'images/**'
                ]
            }, {
                expand: true,
                cwd: '<%%= yeogurt.dev %>/',
                dest: '<%%= yeogurt.server %>/',
                src: [
                    'bower_components/**/*.js',
                    'bower_components/**/*.{woff,otf,ttf,eot,svg}',
                    'bower_components/jquery/*.map'
                ]
            },<% if (cssOption === 'None (Vanilla CSS)') { %> {
                expand: true,
                cwd: '<%%= yeogurt.dev %>/',
                dest: '<%%= yeogurt.server %>/',
                src: [
                    'styles/{,*/}{,*/}*.css',
                    'bower_components/bootstrap/dist/css/*.{css,map}'
                ]
            }<% } %>]
        },
        dist: {
            files: [{
                expand: true,
                cwd: '<%%= yeogurt.dev %>/',
                dest: '<%%= yeogurt.dist %>/',
                src: [
                    <% if (jsOption === 'RequireJS') { %>'bower_components/requirejs/require.js',<% } %>
                    'bower_components/modernizr/modernizr.js',
                    'bower_components/{,*/}{,*/}*.{woff,otf,ttf,eot,svg}',<% if (useDashboard) { %>
                    'dashboard/**/*.*',<% } %>
                    'bower_components/jquery/jquery.min.*'
                ]
            },<% if (htmlOption === 'None (Vanilla HTML)' || (/Backbone/i).test(jsFramework)) { %> {
                expand: true,
                cwd: '<%%= yeogurt.dev %>/',
                dest: '<%%= yeogurt.dist %>/',
                src: [
                    '*.html'
                ]
            }, <% } %>{
                expand: true,
                cwd: '<%%= yeogurt.dev %>/scripts',
                dest: '<%%= yeogurt.dist %>/scripts',
                src: [
                    'scripts/modules/inline-*.*', '!*.js'
                ]
            }, {
                expand: true,
                cwd: '<%%= yeogurt.dev %>/',
                dest: '<%%= yeogurt.dist %>/',
                src: [
                    '*.{ico,png,txt,html}',
                    '.htaccess',
                    'images/{,*/}*.{webp}',
                    'styles/fonts/{,*/}*.*'
                ]
            }]
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-copy');
};