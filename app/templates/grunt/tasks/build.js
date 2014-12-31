/**
 * Builds out an optimised site through minification of CSS and HTML, as well as uglification and optimisation of Javascript.
 */
'use strict';

var taskConfig = function(grunt) {
    grunt.registerTask('build', 'Build a production ready version of your site.', [
        'clean:dist',<% if (useServer) { %>
        'env:prod',<% } %>
        'injector',
        'wiredep:all',
        'copy:dist',
        'useminPrepare',
        'concat:generated',
        'cssmin',
        'concurrent',
        'autoprefixer:server',
        'usemin',
        'htmlmin:dist',
        'uglify',
        'clean:tmp'
    ]);
};

module.exports = taskConfig;
