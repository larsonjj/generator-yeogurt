/**
 * Builds out an optimised site through minification of CSS and HTML, as well as  uglification and optimisation of Javascript.
 */
'use strict';

var taskConfig = function(grunt) {
    grunt.registerTask('test', 'Peform tests on JavaScript', [
        <% if (jshint) { %>'jshint:test',
        <% } %><% if (jsTemplate === 'lodash') { %>'jst:test',<% } else if (jsTemplate === 'handlebars') { %>'handlebars:test',<% } else if (jsTemplate === 'jade') { %>
        'jade:test',<% } %><% if (jsOption === 'browserify') { %>
        'browserify:test',<% } %>
        'karma:unit',
        'clean:temp'
    ]);
};

module.exports = taskConfig;
