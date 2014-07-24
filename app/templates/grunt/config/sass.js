/**
 * Configuration for Sass task(s)
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
                    '<%%= yeogurt.client %>/styles/**/*.scss'
                ]
            },
            files: {
                '<%%= yeogurt.staticServer %>/styles/main.css': '<%%= yeogurt.client %>/styles/main.scss'
            }
        },
        dist: {
            options: {
                precision: 10,
                outputStyle: 'compressed',
                sourceMap: 'main.css.map',
                includePaths: [
                    '<%%= yeogurt.client %>/styles/**/*.scss'
                ]
            },
            files: {
                '<%%= yeogurt.dist %>/styles/main.css': '<%%= yeogurt.client %>/styles/main.scss'
            }
        }
    });

};

module.exports = taskConfig;
