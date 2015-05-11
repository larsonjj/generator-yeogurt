// `grunt serve`
// Starts up a development server that watches for local file changes
// and automatically reloads them to the browser.

'use strict';

var taskConfig = function(grunt) {
  grunt.registerTask('serve', 'Open a development server within your browser', function(target) {

    if (target === 'build') {
      return grunt.task.run(['build',<% if (useServer) { %>
      'env:all', 'env:prod', 'express:build', 'open', 'keepalive'<% } else { %> 'browserSync:build:keepalive'<% } %>]);
    }

    grunt.task.run([
      'clean:tmp',<% if (useServer) { %>
      'env:all',<% } %><% if (useKss && cssOption !== 'css') { %>
      'copy:serve',<% } %><% if (jsFramework === 'angular') { %>
      'ngtemplates',<% } %><% if (jsTemplate === 'underscore') { %>
      'jst:compile',<% } else if (jsTemplate === 'handlebars') { %>
      'handlebars:compile',<% } %><% if (htmlOption === 'jade' && !useServer ) { %>
      'jade:serve',<% } else if (htmlOption === 'swig' && !useServer ) {  %>
      'swig:serve',<% } %><% if (jsOption === 'browserify') { %>
      'browserify:serve',<% } %><% if (cssOption === 'less') { %>
      'less:serve',<% } %><% if (cssOption === 'sass') { %>
      'sass:serve',<% } %><% if (cssOption === 'stylus') { %>
      'stylus:serve',<% } %><% if (useDashboard) { %>
      'dashboard:serve',<% } %><% if (useKss) { %>
      'styleguide:serve',<% } %><% if (useJsdoc) { %>
      'jsdoc:serve',<% } %>
      'autoprefixer:serve'
    ]);

    if (target === 'nowatch') {
      return true;
    }

    grunt.task.run([<% if (useServer) { %>
      'express:serve',
      'wait',
      'open'<% } else { %>
      'browserSync:serve'<% } %>
    ]);<% if (useKss || useJsdoc || useDashboard) { %>

    if (target === 'docs') {
      return grunt.task.run(['listen:docs']);
    }

    return grunt.task.run(['watch']);<% } else { %>
    return grunt.task.run(['watch']);<% } %>
  });
};

module.exports = taskConfig;
