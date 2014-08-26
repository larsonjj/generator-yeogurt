/**
 * Configuration for HTMLmin task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('htmlmin', {
        dist: {
            options: {
                removeEmptyAttributes: true
            },
            files: [{
                expand: true,
                cwd: '<%= yeogurt.dist %>',
                src: [
                    '*.html', 'views/**/*.html'
                ],
                dest: '<%= yeogurt.dist %>'
            }]
        }
    });

};

module.exports = taskConfig;
