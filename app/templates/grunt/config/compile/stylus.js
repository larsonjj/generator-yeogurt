// Configuration for Stylus task(s)
// Compile Stylus stylesheets to single `.css` file
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('stylus', {
    serve: {
      options: {
        compress: false,
        sourcemap: {
          inline: true
        },
        paths: [
          '<%%= yeogurt.directories.source %>/{<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.styles %>}/'<% if (jsFramework === 'angular') { %>,
          '<%%= yeogurt.directories.source %>/{<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.styles %>}/'<% } %>
        ]
      },
      files: {
        '<%%= yeogurt.directories.temporary %>/<%%= yeogurt.directories.styles.replace(/^_/, "") %>/main.css': '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.styles %>/main.styl'
      }
    },
    build: {
      options: {
        compress: true,
        sourcemap: false, // external sourcemap not supported yet
        paths: [
          '<%%= yeogurt.directories.source %>/{<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.styles %>}/'<% if (jsFramework === 'angular') { %>,
          '<%%= yeogurt.directories.source %>/{<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.styles %>}/'<% } %>
        ]
      },
      files: {
        '<%%= yeogurt.directories.destination %>/<%%= yeogurt.directories.styles.replace(/^_/, "") %>/main.css': '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.styles %>/main.styl'
      }
    }
  });

};

module.exports = taskConfig;
