/**
 * Configuration for concurrent task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('concurrent', {
        compile: [
            'pngmin:dist',
            'imagemin:dist',<% if (useJsdoc) { %>
            'jsdoc:dist',<% } %>
            'svgmin:dist',<% if (htmlOption === 'Jade' && !useServer ) { %>
            'jade:dist',<% } else if(htmlOption === 'Swig' && !useServer) {  %>
            'swig:dist',<% } %><% if (cssOption === 'LESS') { %>
            'less:dist',<% } %><% if (cssOption === 'SASS') { %>
            'sass:dist',<% } %><% if (jsTemplate === 'Lo-dash (Underscore)') { %>
            'jst:dist',<% } else if (jsTemplate === 'Handlebars') { %>
            'handlebars:dist',<% } else if (jsTemplate === 'Jade') { %>
            'jade:dist',<% } %><% if (useDashboard) { %>
            'dashboard:dist',<% } %><% if (jsOption === 'RequireJS') { %>
            'requirejs'<% } %><% if (jsOption === 'Browserify') { %>
            'browserify:dist'<% } %>
        ]
    });

    // grunt.loadNpmTasks('grunt-concurrent');
};