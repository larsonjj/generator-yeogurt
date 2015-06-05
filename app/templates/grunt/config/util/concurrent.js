// Configuration for Concurrent task(s)
// Runs tasks in parallel to speed up the build process
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('concurrent', {
    images: [
      'imagemin:build'
    ],
    compile: [<% if (htmlOption === 'jade') { %>
      'jade:build',<% } else if (htmlOption === 'swig') {  %>
      'swig:build',<% } %><% if (cssOption === 'less') { %>
      'less:build',<% } %><% if (cssOption === 'sass') { %>
      'sass:build',<% } %><% if (cssOption === 'stylus') { %>
      'stylus:build',<% } %><% if (jsOption === 'browserify') { %>
      'browserify:build'<% } %>
    ],<% if (useDashboard) { %>
    docs: [
      'dashboard:build'
    ]<% } %>
  });

};

module.exports = taskConfig;
