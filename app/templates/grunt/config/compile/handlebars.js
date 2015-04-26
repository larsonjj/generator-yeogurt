// Configuration for handlebars task(s)
// Compile handlebars templates to single `.js` file
// using the JST namespace (accessible via window.JST)
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('handlebars', {
    serve: {
      options: {
        namespace: 'JST'
      },
      files: {
        '<%%= yeogurt.directories.temporary %>/scripts/templates.js': [
          '<%%= yeogurt.directories.source %>/{<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.screens %>}/**/*.hbs'
        ]
      }
    },
    build: {
      options: {
        namespace: 'JST'
      },
      files: {
        '<%%= yeogurt.directories.destination %>/scripts/templates.js': [
          '<%%= yeogurt.directories.source %>/{<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.screens %>}/**/*.hbs'
        ]
      }
    }
  });

};

module.exports = taskConfig;
