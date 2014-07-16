/**
 * Build a production ready version of your site and zip it up
 */
'use strict';

module.exports = function(grunt) {
    grunt.registerTask('wait', 'Helper task that allows a set amount of time to wait for the server to reload', function() {
        grunt.log.ok('Waiting for server...');

        var done = this.async();

        setTimeout(function() {
            grunt.log.writeln('Done waiting!');
            done();
        }, 500);
    });
};