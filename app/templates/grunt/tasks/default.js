/**
 * default.js
 * Defaults to building a production ready version of your site.
 */
'use strict';

module.exports = function(grunt) {
    grunt.registerTask('default', 'Defaults to building a production ready version of your site.', [
        'concurrent:build'
    ]);
};