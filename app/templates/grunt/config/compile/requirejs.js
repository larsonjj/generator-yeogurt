/**
 * Configuration for Require task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('requirejs', {
        dist: {
            options: {
                name: 'main',
                baseUrl: '<%%= yeogurt.client %>/scripts/',
                mainConfigFile: '<%%= yeogurt.client %>/scripts/main.js',
                out: '<%%= yeogurt.dist %>/scripts/main.js',
                optimize: 'uglify2',<% if (jsFramework === 'react' && jsOption === 'requirejs') { %>
                generateSourceMaps: false,<% } else { %>generateSourceMaps: true,<% } %>
                preserveLicenseComments: false<% if (jsFramework === 'react' && jsOption === 'requirejs') { %>,
                onBuildWrite: function (moduleName, path, singleContents) {
                  return singleContents.replace(/jsx!/g, '');
                }<% } %>
            }
        }
    });

};

module.exports = taskConfig;