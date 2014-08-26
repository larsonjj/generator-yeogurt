/**
 * Builds out an optimised site through minification of CSS and HTML, as well as  uglification and optimisation of Javascript.
 */
'use strict';

var taskConfig = function(grunt) {
    grunt.registerTask('test', 'Peform tests on JavaScript', function(target) {
        // Allow for remote access to app/site via the 0.0.0.0 ip address
        if (grunt.option('allow-remote')) {
            grunt.config.set('karma.options.hostname', '0.0.0.0');
        }

        grunt.task.run([
            'browserify:test'
        ]);

        if (target === 'watch') {
            grunt.task.run(['karma:unitWatch']);
        }
        else {
            grunt.task.run(['karma:unit']);
        }

        // Clean up temp files
        grunt.task.run([
            'clean:temp'
        ]);
    });
};

module.exports = taskConfig;
