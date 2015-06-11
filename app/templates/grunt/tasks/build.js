// `grunt build`
// Builds out an optimized site through (but not limited to) minification of CSS and HTML,
// as well as uglification and optimization of Javascript, and compression of images.

'use strict';

var taskConfig = function(grunt) {
  grunt.registerTask('build', 'Build a production ready version of your site.', [
    'clean:build',
    'copy:build',
    'concurrent:images',
    'concurrent:compile',
    'postcss:serve',
    'htmlmin:build',<% if (useDashboard) { %>
    'concurrent:docs',<% } %>
    'clean:tmp'
  ]);
};

module.exports = taskConfig;
