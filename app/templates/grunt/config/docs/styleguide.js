/**
 * Configuration for styleguide task(s)
 * Create styleguide using KSS (Knyle Style Sheets)
 */
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('styleguide', {
    options: {

      framework: {
        name: 'kss'
      },

      name: 'Style Guide',

      template: {
        src: '<%%= yeogurt.client %>/docs/styleguide'
      }

    },
    server: {
      files: {
        '<%%= yeogurt.tmp %>/docs/styleguide': [<% if (cssOption !== 'css') { %>
          '<%%= yeogurt.tmp %>/styles/**/*.css'<% } else { %>
          '<%%= yeogurt.client %>/styles/**/*.css'<% } %>
        ]
      }
    },
    dist: {
      files: {
        '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>docs/styleguide': [
          '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>styles/**/*.css'
        ]
      }
    }
  });

};

module.exports = taskConfig;

