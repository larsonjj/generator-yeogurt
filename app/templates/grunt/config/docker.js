/**
 * Configuration for docker task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('docker', {
        dist : {
            src: ['<%%= yeogurt.dev %>/scripts/**/*', '*.md'],
            dest: '<%%= yeogurt.dist %>/docs/api',
            options: {
                colourScheme: 'manni',
                lineNums: true,
                ignoreHidden: true
            }
        }
    });

    // grunt.loadNpmTasks('grunt-docker');
};