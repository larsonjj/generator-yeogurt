// Configuration for LESS task(s)
// Compile LESS stylesheets to single `.css` file
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('less', {
    server: {
      options: {
        paths: [
          '<%%= yeogurt.client %>/bower_components',
          '<%%= yeogurt.client %>/styles'<% if (jsFramework === 'angular') { %>,
          '<%%= yeogurt.client %>/app/'<% } %>
        ],
        sourceMap: true,
        sourceMapFilename: '<%%= yeogurt.tmp %>/app/main.css.map',
        sourceMapBasepath: '<%%= yeogurt.tmp %>/app/',
        sourceMapRootpath: '',
        dumpLineNumbers: 'comments',
        outputSourceFiles: true
      },
      expand: true,
      cwd: '<%%= yeogurt.client %>/',
      dest: '<%%= yeogurt.tmp %>/',
      src: [
        'app/main.less'
      ],
      ext: '.css'
    },
    dist: {
      options: {
        paths: [
          '<%%= yeogurt.client %>/bower_components',
          '<%%= yeogurt.client %>/styles'<% if (jsFramework === 'angular') { %>,
          '<%%= yeogurt.client %>/app/'<% } %>
        ],
        sourceMap: true,
        sourceMapFilename: '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>app/main.css.map',
        sourceMapBasepath: '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>app/',
        sourceMapRootpath: './',
        compress: true,
        outputSourceFiles: true
      },
      expand: true,
      cwd: '<%%= yeogurt.client %>/',
      dest: '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>',
      src: [
        'app/main.less'
      ],
      ext: '.css'
    }
  });

};

module.exports = taskConfig;
