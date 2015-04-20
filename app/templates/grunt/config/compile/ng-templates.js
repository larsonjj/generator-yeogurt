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
      usemin: '<%%= yeogurt.scripts %>/main.js',
      prefix: '/'
    },
    main: {
      cwd: '<%%= yeogurt.directories.source %>',
      src: ['**/*.html'],
      dest: '<%%= yeogurt.directories.temporary %>/templates.js'
    },
    tmp: {
      cwd: '<%%= yeogurt.directories.temporary %>',
      src: ['**/*.html'],
      dest: '<%%= yeogurt.directories.temporary %>/tmp-templates.js'
    }
  });
};

module.exports = taskConfig;
