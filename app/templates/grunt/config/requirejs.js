/**
 * Configuration for Require task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('requirejs', {
        dist: {
            options: {
                name: 'main',
                baseUrl: '<%%= yeogurt.dev %>/scripts/',
                mainConfigFile: '<%%= yeogurt.dev %>/scripts/main.js',
                out: '<%%= yeogurt.dist %>/scripts/main.js',
                optimize: 'uglify2',<% if (jsFramework === 'Backbone + React' && jsOption === 'RequireJS') { %>
                generateSourceMaps: false,<% } else { %>generateSourceMaps: true,<% } %>
                preserveLicenseComments: false<% if (jsFramework === 'Backbone + React' && jsOption === 'RequireJS') { %>,
                onBuildWrite: function (moduleName, path, singleContents) {
                  return singleContents.replace(/jsx!/g, '');
                }<% } %>
            }
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-requirejs');
};