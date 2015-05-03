// Configuration for Dashboard task(s)
// Generates dashboard documentation based on markup comments
'use strict';

var taskConfig = function(grunt) {

  // Load config for use with non-grunt logic
  var yeogurt = require('../../../yeogurt.conf');

  grunt.config.set('dashboard', {
    serve: {
      options: {
        dashTemplate: '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.docs %>/dashboard/template.hbs',
        logo: yeogurt.directories.images.replace(/^_/, '') + '/yeogurt-logo.png',
        generatedDir: '<%%= yeogurt.directories.temporary %>/<%%= yeogurt.directories.docs.replace(/^_/, "") %>/dashboard/generated',
        assets: [{
          cwd: '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.docs %>/dashboard/',
          src: [
            '**/*',
            '!*.hbs'
          ]
        }]
      },
      files: {
        '<%%= yeogurt.directories.temporary %>/<%%= yeogurt.directories.docs.replace(/^_/, "") %>/dashboard/index.html': [
          '<%%= yeogurt.directories.source %>/**/*.<% if (htmlOption === "jade") { %>jade<% } else if (htmlOption === "swig") { %>swig<% } %>'
        ]
      }
    },
    build: {
      options: {
        dashTemplate: '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.docs %>/dashboard/template.hbs',
        logo: yeogurt.directories.images.replace(/^_/, '') + '/yeogurt-logo.png',
        generatedDir: '<%%= yeogurt.directories.destination %>/<%%= yeogurt.directories.docs.replace(/^_/, "") %>/dashboard/generated',
        assets: [{
          cwd: '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.docs %>/dashboard/',
          src: [
            '**/*',
            '!*.hbs'
          ]
        }]
      },
      files: {
        '<%%= yeogurt.directories.destination %>/<%%= yeogurt.directories.docs.replace(/^_/, "") %>/dashboard/index.html': [
          '<%%= yeogurt.directories.source %>/**/*.<% if (htmlOption === "jade") { %>jade<% } else if (htmlOption === "swig") { %>swig<% } %>'
        ]
      }
    }
  });

};

module.exports = taskConfig;
