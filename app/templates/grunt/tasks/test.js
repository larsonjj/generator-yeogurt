/**
 * Builds out an optimised site through minification of CSS and HTML, as well as  uglification and optimisation of Javascript.
 */
'use strict';

var taskConfig = function(grunt) {
    grunt.registerTask('test', 'Peform tests on JavaScript', [
        <% if (jshint) { %>'jshint:test',
        <% } %><% if (jsTemplate === 'Lo-dash') { %>'jst:test',<% } else if (jsTemplate === 'Handlebars') { %>'handlebars:test',<% } else if (jsTemplate === 'Jade') { %>
        'jade:test',<% } %><% if (jsOption === 'Browserify') { %>
        'browserify:test',<% } %>
        'karma:unit',
        'clean:temp'
    ]);
};

module.exports = taskConfig;
