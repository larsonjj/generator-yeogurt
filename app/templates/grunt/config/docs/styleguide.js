// Configuration for Knyle Style Sheet task(s)
// Generates styleguide documentation based on stylesheet comments
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
          '<%%= yeogurt.tmp %>/**/*.css'<% } else { %>
          '<%%= yeogurt.client %>/{app,modules,lib}/**/*.css'<% } %>
        ]
      }
    },
    dist: {
      files: {
        '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>docs/styleguide': [
          '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>app/**/*.css'
        ]
      }
    }
  });

};

module.exports = taskConfig;

