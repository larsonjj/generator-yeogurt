// `grunt test`
// Runs all tests and static analysis (i.e. JSHint)

'use strict';

var taskConfig = function(grunt) {
  grunt.registerTask('test', 'Peform tests on JavaScript', function(target) {<% if (useTesting) { %>
    // Allow for remote access to app/site via the 0.0.0.0 ip address
    if (grunt.option('allow-remote')) {
      grunt.config.set('karma.options.hostname', '0.0.0.0');
    }<% } %>

    if (target === 'e2e') {<% if (!useServer) { %>
      grunt.config.set('connect.server.options.open', false);
      grunt.config.set('connect.server.options.livereload', false);<% } %>
      grunt.task.run([
        'serve:nowatch',<% if (!useServer) { %>
        'connect:server',<% } else { %>
        'express:server',<% } %>
        'protractor'<% if (jsFramework !== 'backbone' || jsOption !== 'requirejs') { %>,
        'clean:tmp'<% } %>
      ]);
    }<% if (useServerTesting) { %>

    if (target === 'server') {
        grunt.task.run([
          'env:all',
          'env:test',
          'mochaTest'
        ]);
    }<% } %>

    if (!target || target === 'client') {
      grunt.task.run([
        'eslint'<% if (useTesting) { %><% if (jsTemplate === 'underscore') { %>,
        'jst:server'<% } else if (jsTemplate === 'handlebars') { %>,
        'handlebars:server'<% } else if (jsTemplate === 'jade') { %>,
        'jade:server'<% } %><% if (jsOption === 'browserify') { %>,
        'browserify:test'<% } %><% } %>
      ]);<% if (useTesting) { %>

      if (grunt.option('watch')) {
        grunt.task.run(['karma:unitWatch']);
      }
      else {
        grunt.task.run(['karma:unit']);
      }<% if (jsFramework !== 'backbone' || jsOption !== 'requirejs') { %>

      // Clean up temp files
      grunt.task.run([
        'clean:tmp'
      ]);<% } %><% } %>
    }
  });
};

module.exports = taskConfig;
