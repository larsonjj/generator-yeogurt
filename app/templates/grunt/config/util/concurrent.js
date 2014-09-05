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
            'svgmin:dist',<% if (htmlOption === 'jade' || jsTemplate === 'jade') { %>
            'jade:dist',<% } else if (htmlOption === 'swig') {  %>
            'swig:dist',<% } %><% if (cssOption === 'less') { %>
            'less:dist',<% } %><% if (cssOption === 'sass') { %>
            'sass:dist',<% } %><% if (cssOption === 'stylus') { %>
            'stylus:dist',<% } %><% if (jsTemplate === 'lodash') { %>
            'jst:dist',<% } else if (jsTemplate === 'handlebars') { %>
            'handlebars:dist',<% } %><% if (useDashboard) { %>
            'dashboard:dist',<% } %><% if (jsOption === 'requirejs') { %>
            'requirejs'<% } %><% if (jsOption === 'browserify') { %>
            'browserify:dist'<% } %>
        ]
    });

};

module.exports = taskConfig;
