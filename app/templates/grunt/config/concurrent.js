/**
 * Configuration for concurrent task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('concurrent', {
        compile: [
            'pngmin:dist',
            'imagemin:dist',<% if (useDocker) { %>
            'docker:dist',<% } %>
            'svgmin:dist',<% if (htmlOption === 'Jade') { %>
            'jade:dist',<% } else if(htmlOption === 'Swig') {  %>
            'swig:dist',<% } %><% if (cssOption === 'LESS') { %>
            'less:dist',<% if (ieSupport) { %>
            'less:distPrint',<% } %><% } %><% if (cssOption === 'SASS') { %>
            'sass:dist',<% if (ieSupport) { %>
            'sass:distPrint',<% } %><% } %><% if (jsTemplate === 'Lo-dash (Underscore)') { %>
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