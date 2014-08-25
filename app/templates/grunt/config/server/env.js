/**
 * Configuration for node environment task(s)
 */
'use strict';
<% if (useSession) { %>
var secrets = require('../../server/config/secrets');<% } %>

var taskConfig = function(grunt) {

    grunt.config.set('env', {
        dev: {
            NODE_ENV: 'development'
        },
        prod: {
            NODE_ENV: 'production'
        },
        all: <% if (useSession) { %>secrets<% } else { %>{
            // Environment variables that are always loaded
        }<% } %>
    });

};

module.exports = taskConfig;
