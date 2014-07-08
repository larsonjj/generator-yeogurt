/**
 * Configuration for SASS task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('sass', {
        server: {
            options: {
                sourceComments: 'map',
                outputStyle: 'nested',
                sourceMap: '<%%= yeogurt.server %>/styles/main.css.map',
                includePaths: [
                    '<%%= yeogurt.dev %>/styles/**/*.scss'
                ]
            },
            files: {
                '<%%= yeogurt.server %>/styles/main.css': '<%%= yeogurt.dev %>/styles/main.scss'
            }
        },
        dist: {
            options: {
                sourceComments: 'map',
                outputStyle: 'compressed',
                sourceMap: '<%%= yeogurt.dist %>/styles/main.css.map',
                includePaths: [
                    '<%%= yeogurt.dev %>/styles/**/*.scss'
                ]
            },
            files: {
                '<%%= yeogurt.dist %>/styles/main.css': '<%%= yeogurt.dev %>/styles/main.scss'
            }
        }
    });

    // grunt.loadNpmTasks('grunt-sass');
};