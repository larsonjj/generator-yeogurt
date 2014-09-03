/**
 * Gruntfile.js
 * Use to check for vulnerable npm packages
 */
'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-nsp-package');
    grunt.registerTask('default', 'validate-package');
};
