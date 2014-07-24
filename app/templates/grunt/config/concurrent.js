/**
 * Configuration for concurrent task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('concurrent', {
        compile: [
            'pngmin:dist',
            'imagemin:dist',<% if (useJsdoc) { %>
            'jsdoc:dist',<% } %>
            'svgmin:dist',<% if (htmlOption === 'Jade' ) { %>
            'jade:dist',<% } else if(htmlOption === 'Swig') {  %>
            'swig:dist',<% } %><% if (cssOption === 'Less') { %>
            'less:dist',<% } %><% if (cssOption === 'Sass') { %>
            'sass:dist',<% } %><% if (jsTemplate === 'Lo-dash (Underscore)') { %>
            'jst:dist',<% } else if (jsTemplate === 'Handlebars') { %>
            'handlebars:dist',<% } else if (jsTemplate === 'Jade') { %>
            'jade:dist',<% } %><% if (useDashboard) { %>
            'dashboard:dist',<% } %><% if (jsOption === 'RequireJS') { %>
            'requirejs'<% } %><% if (jsOption === 'Browserify') { %>
            'browserify:dist'<% } %>
        ]
    });

};

module.exports = taskConfig;
