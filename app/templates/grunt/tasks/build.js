/**
 * Builds out an optimised site through minification of CSS and HTML, as well as uglification and optimisation of Javascript.
 */
'use strict';

module.exports = function(grunt) {
    grunt.registerTask('build', 'Build a production ready version of your site.', [
        'clean:dist',
        'copy:dist',
        'concurrent:compile',<% if (useKss) { %>
        'kss:dist',<% } %>
        'useminPrepare',
        'concat:generated',<% if (cssOption === 'None (Vanilla CSS)') { %>
        'cssmin:generated',<% } %>
        'usemin',
        'htmlmin:dist',
        'uglify',
        'clean:temp'
    ]);
};