/**
 * Configuration for jsdoc task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('jsdoc', {
        server : {
            src: ['<%%= yeogurt.dev %>/scripts/**/*', '*.md'],
            dest: '<%%= yeogurt.server %>/docs/api',
            options: {
                template : '<%%= yeogurt.dev %>/docs/api/theme'
            }
        },
        dist : {
            src: ['<%%= yeogurt.dev %>/scripts/**/*', '*.md'],
            dest: '<%%= yeogurt.dist %>/docs/api',
            options: {
                template : '<%%= yeogurt.dev %>/docs/api/theme'
            }
        }
    });

    // grunt.loadNpmTasks('grunt-jsdoc');
};