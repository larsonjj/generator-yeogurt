// `grunt build`
// Builds out an optimized site through (but not limited to) minification of CSS and HTML,
// as well as uglification and optimization of Javascript, and compression of images.

'use strict';

var taskConfig = function(grunt) {
  grunt.registerTask('build', 'Build a production ready version of your site.', [
    'clean:build',<% if (useServer) { %>
    'env:prod',<% } %>
    'copy:build',
    'concurrent:images',
    'concurrent:compile',<% if (jsFramework === 'angular') { %>
    'ngtemplates:compile',<% } %>
    'postcss:serve',
    'htmlmin:build',<% if (useKss || useJsdoc || useDashboard) { %>
    'concurrent:docs',<% } %>
    'clean:tmp'
  ]);
};

module.exports = taskConfig;
