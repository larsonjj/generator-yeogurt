/**
 * compress.js
 * Configuration for compress task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('compress', {
        main: {
            options: {
                mode: 'zip',
                pretty: true,
                archive: '<%%= yeogurt.dist %>/build.zip'
            },
            expand: true,
            cwd: '<%%= yeogurt.dist %>/',
            src: ['*/**', '!**/*.zip', '!**/*.psd', '!**/.git', '!**/.svn']
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-compress');
};