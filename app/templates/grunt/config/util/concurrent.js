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
      'stylus:build',<% } %><% if (jsTemplate === 'underscore') { %>
      'jst:compile',<% } else if (jsTemplate === 'handlebars') { %>
      'handlebars:compile',<% } %><% if (jsOption === 'requirejs') { %>
      'requirejs',<% } %><% if (jsOption === 'browserify') { %>
      'browserify:build'<% } %>
    ],<% if (useDashboard || useJsdoc || useKss) { %>
    docs: [<% if (useDashboard) { %>
      'dashboard:build',<% } %><% if (useJsdoc) { %>
      'jsdoc:build',<% } %><% if (useKss) { %>
      'styleguide:build'<% } %>
    ]<% } %>
  });

};

module.exports = taskConfig;
