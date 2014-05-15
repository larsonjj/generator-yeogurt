/**
 * concurrent.js
 * Configuration for concurrent task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('concurrent', {
        optimise: [
            'newer:imagemin:dist',
            'newer:svgmin:dist',<% if (htmlOption === 'Jade') { %>
            'jade:dist',<% } else if(htmlOption === 'Swig') {  %>
            'swig:dist',<% } %><% if (cssOption === 'LESS') { %>
            'less:dist',<% if (ieSupport) { %>
            'less:distPrint',<% } %><% } %><% if (cssOption === 'SCSS') { %>
            'sass:dist',<% if (ieSupport) { %>
            'sass:distPrint',<% } %><% } %><% if (useDashboard) { %>
            'dashboard:dist',<% } %><% if (jsOption === 'RequireJS') { %>
            'requirejs'<% } %><% if (jsOption === 'Browserify') { %>
            'browserify:dist'<% } %>
        ],
        uglify: ['uglify'],
        build: [
            'test',
            'build'
        ]
    });

    // grunt.loadNpmTasks('grunt-concurrent');
};