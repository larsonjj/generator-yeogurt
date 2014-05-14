/**
 * build.js
 * Builds out an optimised site through minification of CSS and HTML, as well as  uglification and optimisation of Javascript.
 */
'use strict';

module.exports = function(grunt) {
    grunt.registerTask('build', 'Build a production ready version of your site.', [
        'clean:dist',
        'copy:dist',<% if (jsOption === 'Browserify') { %>
        'browserify:dist',
        'exorcise:dist',<% } %>
        'newer:imagemin',
        'svgmin',<% if (htmlOption === 'Jade') { %>
        'jade:dist',<% } else if(htmlOption === 'Swig') {  %>
        'swig:dist',<% } %><% if (useDashboard) { %>
        'dashboard:dist',<% } %>
        'useminPrepare',<% if (cssOption === 'LESS') { %>
        'less:dist',<% if (ieSupport) { %>
        'less:distPrint',<% } %><% } %><% if (cssOption === 'SCSS') { %>
        'sass:dist',<% if (ieSupport) { %>
        'sass:distPrint',<% } %><% } %><% if (jsOption === 'RequireJS') { %>
        'requirejs',<% } %>
        'concat:generated',<% if (cssOption === 'None (Vanilla CSS)') { %>
        'cssmin:generated',<% } %>
        'usemin',
        'htmlmin:dist',<% if (cssOption === 'None (Vanilla CSS)') { %>
        'uncss',<% } %>
        'uglify',
        'clean:temp'
    ]);
};