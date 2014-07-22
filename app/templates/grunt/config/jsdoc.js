/**
 * Configuration for jsdoc task(s)
 */
'use strict';

var taskConfig = function(grunt) {

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

};

module.exports = taskConfig;
