// Configuration for ngTemplates task(s)
// Compile angular HTML template files into a single js file
// Also attaches templates to $templateCache and run them through HTMLmin
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('ngtemplates', {
    options: {
      // This should be the name of your main angular module
      module: '<%= projectName %>',
      htmlmin: {
        collapseBooleanAttributes: true,
        conservativeCollapse: true,
        removeCommentsFromCDATA: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        collapseWhitespace: true
      },
      prefix: '/'
    },
    compile: {
      cwd: '<%%= yeogurt.directories.source %>/',
      src: ['{<%%= yeogurt.directories.screens %>,<%%= yeogurt.directories.modules %>}/**/*.html'],
      dest: '<%%= yeogurt.directories.temporary %>/<%%= yeogurt.directories.scripts.replace(/^_/, "") %>/templates.js'
    }
  });
};

module.exports = taskConfig;
