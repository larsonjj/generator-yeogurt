/**
 * Configuration for SASS task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('sass', {
        server: {
            options: {
                precision: 10,
                outputStyle: 'nested',
                sourceMap: 'main.css.map',
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
                precision: 10,
                outputStyle: 'compressed',
                sourceMap: 'main.css.map',
                includePaths: [
                    '<%%= yeogurt.dev %>/styles/**/*.scss'
                ]
            },
            files: {
                '<%%= yeogurt.dist %>/styles/main.css': '<%%= yeogurt.dev %>/styles/main.scss'
            }
        }
    });

};

module.exports = taskConfig;
