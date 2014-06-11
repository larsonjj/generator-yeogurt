/**
 * Configuration for docker task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('docker', {
        server : {
            src: ['<%%= yeogurt.dev %>/scripts/**/*', '*.md'],
            dest: '<%%= yeogurt.server %>/docs/api',
            options: {
                colourScheme: 'manni',
                lineNums: true,
                ignoreHidden: true
            }
        },
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