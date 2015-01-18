/**
 * Configuration for ng-templates task(s)
 */
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
      usemin: 'app/main.js',
      prefix: '/'
    },
    main: {
      cwd: '<%%= yeogurt.client %>',
      src: ['app/**/*.html'],
      dest: '<%%= yeogurt.tmp %>/templates.js'
    },
    tmp: {
      cwd: '<%%= yeogurt.tmp %>',
      src: ['app/**/*.html'],
      dest: '<%%= yeogurt.tmp %>/tmp-templates.js'
    }
  });
};

module.exports = taskConfig;
