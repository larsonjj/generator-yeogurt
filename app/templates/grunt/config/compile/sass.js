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
                sourceMap: true,
                includePaths: [
                    '<%%= yeogurt.client %>/styles/'
                ]
            },
            files: {<% if (sassSyntax === 'scss') { %>
                '<%%= yeogurt.staticServer %>/styles/main.css': '<%%= yeogurt.client %>/styles/main.scss'<% } else { %>
                '<%%= yeogurt.staticServer %>/styles/main.css': '<%%= yeogurt.client %>/styles/main.sass'<% } %>
            }
        },
        dist: {
            options: {
                precision: 10,
                outputStyle: 'compressed',
                sourceMap: true,
                includePaths: [
                    '<%%= yeogurt.client %>/styles/'
                ]
            },
            files: {<% if (sassSyntax === 'scss') { %>
                '<%%= yeogurt.dists %>/styles/main.css': '<%%= yeogurt.client %>/styles/main.scss'<% } else { %>
                '<%%= yeogurt.dists %>/styles/main.css': '<%%= yeogurt.client %>/styles/main.sass'<% } %>
            }
        }
    });

};

module.exports = taskConfig;
