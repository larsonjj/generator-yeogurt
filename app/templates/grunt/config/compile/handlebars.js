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
        '<%%= yeogurt.directories.temporary %>/templates.js': [
          '<%%= yeogurt.directories.source %>/{<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.styles %>}/**/*.hbs'
        ]
      }
    },
    dist: {
      options: {
        namespace: 'JST'
      },
      files: {
        '<%%= yeogurt.directories.temporary %>/templates.js': [
          '<%%= yeogurt.directories.source %>/{<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.styles %>}/**/*.hbs'
        ]
      }
    }<% if (jsFramework === 'backbone') { %>,
    test: {
      options: {
        namespace: 'JST'
      },
      files: {
        '<%%= yeogurt.directories.temporary %>/templates.js': [
          '<%%= yeogurt.directories.source %>/{<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.styles %>}/**/*.hbs'
        ]
      }
    }<% } %>
  });

};

module.exports = taskConfig;
