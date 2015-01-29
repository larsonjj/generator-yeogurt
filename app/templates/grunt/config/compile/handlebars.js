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
        '<%%= yeogurt.tmp %>/templates/templates.js': ['<%%= yeogurt.client %>/app/**/*.hbs']
      }
    },
    dist: {
      options: {
        namespace: 'JST'
      },
      files: {
        '<%%= yeogurt.tmp %>/templates/templates.js': ['<%%= yeogurt.client %>/app/**/*.hbs']
      }
    }<% if (jsFramework === 'backbone') { %>,
    test: {
      options: {
        namespace: 'JST'
      },
      files: {
        '<%%= yeogurt.tmp %>/test/templates.js': ['<%%= yeogurt.client %>/app/**/*.hbs']
      }
    }<% } %>
  });

};

module.exports = taskConfig;
