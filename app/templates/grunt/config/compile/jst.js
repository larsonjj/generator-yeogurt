// Configuration for JST task(s)
// Compile JST scripts/templates to single `.js` file
// using the JST namespace (accessible via window.JST)
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('jst', {
    server: {
      files: {
        '<%%= yeogurt.directories.temporary %>/scripts/templates.js': [
          '<%%= yeogurt.directories.source %>/{<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.screens %>}/**/*.jst'
        ]
      }
    },
    dist: {
      files: {
        '<%%= yeogurt.directories.destination %>/scripts/templates.js': [
          '<%%= yeogurt.directories.source %>/{<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.screens %>}/**/*.jst'
        ]
      }
    }
  });

};

module.exports = taskConfig;
