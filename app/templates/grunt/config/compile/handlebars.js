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
          '<%%= yeogurt.directories.source %>/{<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.screens %>}/**/*.hbs'
        ]
      }
    },
    dist: {
      options: {
        namespace: 'JST'
      },
      files: {
        '<%%= yeogurt.directories.destination %>/templates.js': [
          '<%%= yeogurt.directories.source %>/{<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.screens %>}/**/*.hbs'
        ]
      }
    }<% if (jsFramework === 'backbone') { %>,
    test: {
      options: {
        namespace: 'JST'
      },
      files: {
        '<%%= yeogurt.directories.temporary %>/templates.js': [
          '<%%= yeogurt.directories.source %>/{<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.screens %>}/**/*.hbs'
        ]
      }
    }<% } %>
  });

};

module.exports = taskConfig;
