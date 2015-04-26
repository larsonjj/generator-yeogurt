// Configuration for JSDoc task(s)
// Generates jsdoc api documentation based on JS comments
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('jsdoc', {
    server: {
      src: ['<%%= yeogurt.directories.source %>/{<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.scripts %>}/**/*.js', '*.md'],
      dest: '<%%= yeogurt.directories.temporary %>/<%%= yeogurt.directories.docs.replace(/^_/, "") %>/jsdoc',
      options: {
        template: '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.docs %>/jsdoc/theme'
      }
    },
    dist: {
      src: ['<%%= yeogurt.directories.source %>/{<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.scripts %>}/**/*.js', '*.md'],
      dest: '<%%= yeogurt.directories.destination %>/<%%= yeogurt.directories.docs.replace(/^_/, "") %>/jsdoc',
      options: {
        template: '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.docs %>/jsdoc/theme'
      }
    }
  });

};

module.exports = taskConfig;
