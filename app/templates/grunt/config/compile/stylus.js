/**
 * Configuration for Sass task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('stylus', {
        server: {
            options: {
                compress: false,
                sourcemap: false, // not supported yet
                paths: [
                    '<%%= yeogurt.client %>/styles/'
                ]
            },
            files: {
                '<%%= yeogurt.tmp %>/styles/main.css': '<%%= yeogurt.client %>/styles/main.styl'
            }
        },
        dist: {
            options: {
                compress: true,
                sourcemap: false, // not supported yet
                paths: [
                    '<%%= yeogurt.client %>/styles/'
                ]
            },
            files: {
                '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>styles/main.css': '<%%= yeogurt.client %>/styles/main.styl'
            }
        }
    });

};

module.exports = taskConfig;
