/**
 * htmlmin.js
 * Configuration for HTMLmin task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('htmlmin', {
        dist: {
            options: {
                removeEmptyAttributes: true
            },
            files: [{
                expand: true,
                cwd: '<%%= yeogurt.dist %>',
                src: [
                    '*.html', 'views/{,*/}{,*/}*.html'
                ],
                dest: '<%%= yeogurt.dist %>'
            }]
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-htmlmin');
};