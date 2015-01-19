// Configuration for Dashboard task(s)
// Generates dashboard documentation based on markup comments
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('dashboard', {
    server: {
      options: {
        dashTemplate: '<%%= yeogurt.client %>/docs/dashboard/template.hbs',
        logo: 'images/yeogurt-logo.png',
        generatedDir: '<%%= yeogurt.tmp %>/docs/dashboard/generated',
        assets: [{
          cwd: '<%%= yeogurt.client %>/docs/dashboard/',
          src: [
            '**/*',
            '!*.hbs'
          ]
        }]
      },
      files: {
        '<%%= yeogurt.tmp %>/docs/dashboard/index.html': [
          '<%%= yeogurt.client %>/**/*.<% if (htmlOption === "jade") { %>jade<% } else if (htmlOption === "swig") { %>swig<% } %>'
        ]
      }
    },
    dist: {
      options: {
        dashTemplate: '<%%= yeogurt.client %>/docs/dashboard/template.hbs',
        logo: 'images/yeogurt-logo.png',
        generatedDir: '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>docs/dashboard/generated',
        assets: [{
          cwd: '<%%= yeogurt.client %>/docs/dashboard/',
          src: [
            '**/*',
            '!*.hbs'
          ]
        }]
      },
      files: {
        '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>docs/dashboard/index.html': [
          '<%%= yeogurt.client %>/**/*.<% if (htmlOption === "jade") { %>jade<% } else if (htmlOption === "swig") { %>swig<% } %>'
        ]
      }
    }
  });

};

module.exports = taskConfig;
