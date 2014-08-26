/**
 * Configuration for injector task(s)
 */
'use strict';

var _str = require('underscore.string');

var taskConfig = function(grunt) {

    grunt.config.set('injector', {
        options: {

        },
        // Inject component css into index.html
        css: {
            options: {
                transform: function(filePath) {
                    filePath = filePath.replace('/client/', '');
                    return '<link rel="stylesheet" href="' + filePath + '">';
                },
                starttag: '<!-- [injector:css] -->',
                endtag: '<!-- [endinjector] -->'
            },
            files: {
                '<%= yeogurt.client %>/index.html': [
                    '<%= yeogurt.client %>/styles/**/*.css',
                    '!<%= yeogurt.client %>/styles/main.css'
                ]
            }
        }
    });

};

module.exports = taskConfig;
