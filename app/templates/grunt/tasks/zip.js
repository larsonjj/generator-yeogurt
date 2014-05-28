/**
 * Build a production ready version of your site and zip it up
 */
'use strict';

module.exports = function(grunt) {
    grunt.registerTask('zip', 'Build a production ready version of your site and zip it up', [
        'build',
        'compress'
    ]);
};