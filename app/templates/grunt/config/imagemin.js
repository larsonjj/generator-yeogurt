/**
 * Configuration for imagemin task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('imagemin', {
        dist: {
            files: [{
                expand: true,
                cwd: '<%%= yeogurt.dev %>/images',
                src: '**/*.{png,jpg,jpeg,gif}',
                dest: '<%%= yeogurt.dist %>/images'
            }]
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-imagemin');
};