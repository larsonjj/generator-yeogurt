/**
 * Configuration for compress task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('compress', {
        main: {
            options: {
                mode: 'zip',
                pretty: true,
                archive: '<%= yeogurt.dist %>/build.zip'
            },
            expand: true,
            cwd: '<%= yeogurt.dist %>/',
            src: ['**/*', '!**/*.zip', '!**/*.psd', '!**/.git', '!**/.svn']
        }
    });

};

module.exports = taskConfig;
