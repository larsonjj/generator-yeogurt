// Configuration for FTPush task(s)
// Pushes site/project build to FTP server
// Connection information found in `.ftppass` file
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('secret', {});

  grunt.config.set('ftpush', {
    build: {
      simple: true,
      auth: {
        host: '<%%= secret.host %>',
        port: 21,
        authKey: 'key1'
      },
      src: '<%%= yeogurt.dist %>',
      dest: '<%%= secret.serverPath %>',
      exclusions: ['*.svn', '.svn/', '.svn', '*.git', '.git/', '.git', '.tmp'],
      server_sep: '/'
    }
  });

};

module.exports = taskConfig;
