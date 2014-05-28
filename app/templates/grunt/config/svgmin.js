/**
 * Configuration for SVGmin task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('svgmin', {
        dist: {
            files: [{
                expand: true,
                cwd: '<%%= yeogurt.dev %>/images',
                src: '**/*.svg',
                dest: '<%%= yeogurt.dist %>/images'
            }]
        }
    });

    // grunt.loadNpmTasks('grunt-svgmin');
};