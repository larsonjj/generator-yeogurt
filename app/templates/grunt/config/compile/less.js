// Configuration for LESS task(s)
// Compile LESS stylesheets to single `.css` file
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('less', {
    serve: {
      options: {
        paths: [
          '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.styles %>'<% if (jsFramework === 'angular') { %>,
          '<%%= yeogurt.directories.source %>/{<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.styles %>}/'<% } %>
        ],
        sourceMap: true,
        sourceMapFilename: '<%%= yeogurt.directories.temporary %>/<%%= yeogurt.directories.styles %>/main.css.map',
        sourceMapBasepath: '<%%= yeogurt.directories.temporary %>/<%%= yeogurt.directories.styles %>/',
        sourceMapRootpath: '',
        dumpLineNumbers: 'comments',
        outputSourceFiles: true
      },
      files: {
        '<%%= yeogurt.directories.temporary %>/<%%= yeogurt.directories.styles.replace(/^_/, "") %>/main.css': '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.styles %>/main.less'
      }
    },
    build: {
      options: {
        paths: [
          '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.styles %>'<% if (jsFramework === 'angular') { %>,
          '<%%= yeogurt.directories.source %>/{<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.styles %>}/'<% } %>
        ],
        sourceMap: true,
        sourceMapFilename: '<%%= yeogurt.directories.destination %>/<%%= yeogurt.directories.styles %>/main.css.map',
        sourceMapBasepath: '<%%= yeogurt.directories.destination %>/<%%= yeogurt.directories.styles %>/',
        sourceMapRootpath: './',
        compress: true,
        outputSourceFiles: true
      },
      files: {
        '<%%= yeogurt.directories.temporary %>/<%%= yeogurt.directories.styles.replace(/^_/, "") %>/main.css': '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.styles %>/main.less'
      }
    }
  });

};

module.exports = taskConfig;
