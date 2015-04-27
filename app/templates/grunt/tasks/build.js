// `grunt build`
// Builds out an optimized site through (but not limited to) minification of CSS and HTML,
// as well as uglification and optimization of Javascript, and compression of images.

'use strict';

var taskConfig = function(grunt) {
  grunt.registerTask('build', 'Build a production ready version of your site.', [
    'clean:build',<% if (useServer) { %>
    'env:prod',<% } %>
    'copy:build',
    'concat:build',
    'concurrent:images',
    'concurrent:compile',<% if (jsFramework === 'angular') { %>
    'ngtemplates:build',<% } %>
    'cssmin',
    'autoprefixer:serve',
    'htmlmin:build',
    'uglify',<% if (useKss || useJsdoc || useDashboard) { %>
    'concurrent:docs',<% } %>
    'clean:tmp'
  ]);
};

module.exports = taskConfig;
