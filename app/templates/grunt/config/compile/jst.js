// Configuration for JST task(s)
// Compile JST templates to single `.js` file
// using the JST namespace (accessible via window.JST)
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('jst', {
    server: {
      files: {
        '<%%= yeogurt.tmp %>/templates/templates.js': ['<%%= yeogurt.client %>/app/**/*.jst']
      }
    },
    dist: {
      files: {
        '<%%= yeogurt.tmp %>/templates/templates.js': ['<%%= yeogurt.client %>/app/**/*.jst']
      }
    }<% if (jsFramework === 'backbone') { %>,
    test: {
      options: {
        namespace: 'JST'
      },
      files: {
        '<%%= yeogurt.tmp %>/test/templates.js': ['<%%= yeogurt.client %>/app/**/*.jst']
      }
    }<% } %>
  });

};

module.exports = taskConfig;
