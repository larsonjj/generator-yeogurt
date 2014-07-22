/**
 * Configuration for ftpush task(s)
 */
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
