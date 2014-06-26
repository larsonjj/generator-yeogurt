/**
 * Build a production ready version of your site and zip it up
 */
'use strict';

module.exports = function(grunt) {
    grunt.registerTask('keepalive', 'Keeps the express server running forever', function() {
        grunt.log.ok('Keeping the server running forever...');

        this.async();
    });
};