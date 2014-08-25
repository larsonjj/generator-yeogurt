/**
 * Configuration for pngmin task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('pngmin', {
        dist: {
            options: {
                ext: '.png'
            },
            files: [{
                expand: true,
                cwd: '<%%= yeogurt.client %>/images',
                src: '**/*.png',
                dest: '<%%= yeogurt.dist %>/images'
            }]
        }
    });

};

module.exports = taskConfig;