/**
 * Configuration for imagemin task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('imagemin', {
        dist: {
            files: [{
                expand: true,
                cwd: '<%%= yeogurt.dev %>/images',
                src: '**/*.{jpg,jpeg,gif}',
                dest: '<%%= yeogurt.dist %>/images'
            }]
        }
    });

};

module.exports = taskConfig;
