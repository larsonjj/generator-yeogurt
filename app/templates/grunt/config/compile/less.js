/**
 * Configuration for Less task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('less', {
        server: {
            options: {
                paths: ['<%%= yeogurt.client %>/'],
                sourceMap: true,
                sourceMapFilename: '<%%= yeogurt.staticServer %>/styles/main.css.map',
                sourceMapBasepath: '<%%= yeogurt.staticServer %>/styles/',
                sourceMapRootpath: '',
                dumpLineNumbers: 'comments',
                outputSourceFiles: true
            },
            expand: true,
            cwd: '<%%= yeogurt.client %>/',
            dest: '<%%= yeogurt.staticServer %>/',
            src: [
                'styles/main.less'
            ],
            ext: '.css'
        },
        dist: {
            options: {
                paths: ['<%%= yeogurt.client %>/'],
                sourceMap: true,
                sourceMapFilename: '<%%= yeogurt.dist %>/styles/main.css.map',
                sourceMapBasepath: '<%%= yeogurt.dist %>/styles/',
                sourceMapRootpath: './',
                compress: true,
                outputSourceFiles: true
            },
            expand: true,
            cwd: '<%%= yeogurt.client %>/',
            dest: '<%%= yeogurt.dist %>/',
            src: [
                'styles/main.less'
            ],
            ext: '.css'
        }
    });

};

module.exports = taskConfig;
