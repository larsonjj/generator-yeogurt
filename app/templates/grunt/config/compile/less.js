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
                sourceMapFilename: '<%%= yeogurt.tmp %>/styles/main.css.map',
                sourceMapBasepath: '<%%= yeogurt.tmp %>/styles/',
                sourceMapRootpath: '',
                dumpLineNumbers: 'comments',
                outputSourceFiles: true
            },
            expand: true,
            cwd: '<%%= yeogurt.client %>/',
            dest: '<%%= yeogurt.tmp %>/',
            src: [
                'styles/main.less'
            ],
            ext: '.css'
        },
        dist: {
            options: {
                paths: ['<%%= yeogurt.client %>/'],
                sourceMap: true,
                sourceMapFilename: '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>styles/main.css.map',
                sourceMapBasepath: '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>styles/',
                sourceMapRootpath: './',
                compress: true,
                outputSourceFiles: true
            },
            expand: true,
            cwd: '<%%= yeogurt.client %>/',
            dest: '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>',
            src: [
                'styles/main.less'
            ],
            ext: '.css'
        }
    });

};

module.exports = taskConfig;
