/**
 * Configuration for pngmin task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('pngmin', {
        dist: {
            options: {
                ext: '.png'
            },
            files: [{
                expand: true,
                cwd: '<%%= yeogurt.dev %>/images',
                src: '**/*.png',
                dest: '<%%= yeogurt.dist %>/images'
            }]
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-pngmin');
};