// Configuration for JSDoc task(s)
// Generates jsdoc api documentation based on JS comments
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('jsdoc', {
    server : {
      src: ['<%%= yeogurt.client %>/{app,modules,lib}/**/*.js', '*.md'],
      dest: '<%%= yeogurt.tmp %>/docs/jsdoc',
      options: {
        template : '<%%= yeogurt.client %>/docs/jsdoc/theme'
      }
    },
    dist : {
      src: ['<%%= yeogurt.client %>/{app,modules,lib}/**/*.js', '*.md'],
      dest: '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>docs/jsdoc',
      options: {
        template : '<%%= yeogurt.client %>/docs/jsdoc/theme'
      }
    }
  });

};

module.exports = taskConfig;
