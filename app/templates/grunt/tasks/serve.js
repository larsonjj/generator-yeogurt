// `grunt serve`
// Starts up a development server that watches for local file changes
// and automatically reloads them to the browser.

'use strict';

var taskConfig = function(grunt) {
  grunt.registerTask('serve', 'Open a development server within your browser', function(target) {

    if (target === 'build') {
      return grunt.task.run(['build', 'browserSync:build:keepalive']);
    }

    grunt.task.run([
      'clean:tmp',
      'imagemin:serve',
      'copy:serve',<% if (htmlOption === 'jade') { %>
      'jade:serve',<% } else if (htmlOption === 'swig') {  %>
      'swig:serve',<% } %><% if (jsOption === 'browserify') { %>
      'browserify:serve',<% } %><% if (cssOption === 'less') { %>
      'less:serve',<% } %><% if (cssOption === 'sass') { %>
      'sass:serve',<% } %><% if (cssOption === 'stylus') { %>
      'stylus:serve',<% } %><% if (useDashboard) { %>
      'dashboard:serve',<% } %>
      'postcss:serve'
    ]);

    if (target === 'nowatch') {
      return true;
    }

    grunt.task.run([
      'browserSync:serve'
    ]);<% if (useDashboard) { %>

    if (target === 'docs') {
      return grunt.task.run(['listen:docs']);
    }

    return grunt.task.run(['watch']);<% } else { %>
    return grunt.task.run(['watch']);<% } %>
  });
};

module.exports = taskConfig;
