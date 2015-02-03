// Configuration for handlebars task(s)
// Compile handlebars templates to single `.js` file
// using the JST namespace (accessible via window.JST)
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('handlebars', {
    server: {
      options: {
        namespace: 'JST'
      },
      files: {
        '<%%= yeogurt.tmp %>/app/templates.js': ['<%%= yeogurt.client %>/{app,modules,lib}/**/*.hbs']
      }
    },
    dist: {
      options: {
        namespace: 'JST'
      },
      files: {
        '<%%= yeogurt.tmp %>/app/templates.js': ['<%%= yeogurt.client %>/{app,modules,lib}/**/*.hbs']
      }
    }<% if (jsFramework === 'backbone') { %>,
    test: {
      options: {
        namespace: 'JST'
      },
      files: {
        '<%%= yeogurt.tmp %>/test/templates.js': ['<%%= yeogurt.client %>/{app,modules,lib}/**/*.hbs']
      }
    }<% } %>
  });

};

module.exports = taskConfig;
