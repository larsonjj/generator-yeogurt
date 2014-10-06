/**
 * Configuration for node environment task(s)
 */
'use strict';
<% if (useAuth) { %>
var secrets = require('../../../server/config/secrets');<% } %>

var taskConfig = function(grunt) {

    grunt.config.set('env', {
        dev: {
            NODE_ENV: 'development'
        },
        prod: {
            NODE_ENV: 'production'
        },
        all: <% if (useAuth) { %>secrets<% } else { %>{
            // Environment variables that are always loaded
        }<% } %>
    });

};

module.exports = taskConfig;
