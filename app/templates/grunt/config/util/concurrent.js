/**
 * Configuration for concurrent task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('concurrent', {
        images: [
            'pngmin:dist',
            'imagemin:dist',
            'svgmin:dist'
        ],
        compile: [<% if (htmlOption === 'jade' || jsTemplate === 'jade') { %>
            'jade:dist',<% } else if (htmlOption === 'swig') {  %>
            'swig:dist',<% } %><% if (cssOption === 'less') { %>
            'less:dist',<% } %><% if (cssOption === 'sass') { %>
            'sass:dist',<% } %><% if (cssOption === 'stylus') { %>
            'stylus:dist',<% } %><% if (jsTemplate === 'underscore') { %>
            'jst:dist',<% } else if (jsTemplate === 'handlebars') { %>
            'handlebars:dist',<% } %><% if (jsOption === 'requirejs') { %>
            'requirejs'<% } %><% if (jsOption === 'browserify') { %>
            'browserify:dist'<% } %>
        ],<% if (useDashboard || useJsdoc || useKss) { %>
        docs: [<% if (useDashboard) { %>
            'dashboard:dist'<% } %><% if (useJsdoc) { %>,
            'jsdoc:dist'<% } %><% if (useKss) { %>,
            'kss:dist'<% } %>
        ]<% } %>
    });

};

module.exports = taskConfig;
