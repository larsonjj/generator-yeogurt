/**
 * build.js
 * Builds out an optimised site through minification of CSS and HTML, as well as  uglification and optimisation of Javascript.
 */
'use strict';

module.exports = function(grunt) {
    grunt.registerTask('build', 'Build a production ready version of your site.', [
        'clean:dist',
        'copy:dist',
        'concurrent:optimise',<% if (jsOption === 'Browserify') { %>
        'exorcise:dist',<% } %>
        'useminPrepare',
        'concat:generated',<% if (cssOption === 'None (Vanilla CSS)') { %>
        'cssmin:generated',<% } %>
        'usemin',
        'htmlmin:dist',<% if (cssOption === 'None (Vanilla CSS)') { %>
        'uncss',<% } %>
        'concurrent:uglify',
        'clean:temp'
    ]);
};