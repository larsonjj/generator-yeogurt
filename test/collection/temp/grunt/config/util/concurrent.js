/**
 * Configuration for concurrent task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('concurrent', {
        compile: [
            'pngmin:dist',
            'imagemin:dist',
            'svgmin:dist',
            'browserify:dist'
        ]
    });

};

module.exports = taskConfig;
