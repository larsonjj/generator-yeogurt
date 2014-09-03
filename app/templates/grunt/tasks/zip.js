/**
 * Build a production ready version of your site and zip it up
 */
'use strict';

var taskConfig = function(grunt) {
    grunt.registerTask('zip', 'Build a production ready version of your site and zip it up', [
        'build',
        'compress'
    ]);
};

module.exports = taskConfig;