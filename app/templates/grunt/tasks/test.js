// `grunt test`
// Runs all tests and static analysis (i.e. JSHint)

'use strict';

var taskConfig = function(grunt) {
  grunt.registerTask('test', 'Peform tests on JavaScript', function(target) {

    if (target === 'e2e') {
      grunt.task.run([
        'serve:nowatch',<% if (!useServer) { %>
        'browserSync:serve',<% } else { %>
        'express:serve',<% } %>
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
        'jst:serve'<% } else if (jsTemplate === 'handlebars') { %>,
        'handlebars:serve'<% } else if (jsTemplate === 'jade') { %>,
        'jade:serve'<% } %><% if (jsOption === 'browserify') { %>,
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
