/**
 * Configuration for jsdoc task(s)
 */
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('jsdoc', {
    server : {
      src: ['<%%= yeogurt.client %>/scripts/**/*', '*.md'],
      dest: '<%%= yeogurt.tmp %>/docs/api',
      options: {
        template : '<%%= yeogurt.client %>/docs/api/theme'
      }
    },
    dist : {
      src: ['<%%= yeogurt.client %>/scripts/**/*', '*.md'],
      dest: '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>docs/api',
      options: {
        template : '<%%= yeogurt.client %>/docs/api/theme'
      }
    }
  });

};

module.exports = taskConfig;
