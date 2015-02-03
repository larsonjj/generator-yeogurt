// Configuration for JST task(s)
// Compile JST templates to single `.js` file
// using the JST namespace (accessible via window.JST)
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('jst', {
    server: {
      files: {
        '<%%= yeogurt.tmp %>/app/templates.js': ['<%%= yeogurt.client %>/{app,modules,lib}/**/*.jst']
      }
    },
    dist: {
      files: {
        '<%%= yeogurt.tmp %>/app/templates.js': ['<%%= yeogurt.client %>/{app,modules,lib}/**/*.jst']
      }
    }<% if (jsFramework === 'backbone') { %>,
    test: {
      options: {
        namespace: 'JST'
      },
      files: {
        '<%%= yeogurt.tmp %>/test/templates.js': ['<%%= yeogurt.client %>/{app,modules,lib}/**/*.jst']
      }
    }<% } %>
  });

};

module.exports = taskConfig;
