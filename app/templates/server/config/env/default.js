/**
 * Default Configuration for all environments
 */
'use strict';

var path = require('path');
var _ = require('lodash');
var env = process.env.NODE_ENV || 'development';
var envConfig = require('./' + env);

// All configurations will extend these options
var defaults = {
    server: {
        port: process.env.PORT || 9010,
        host: process.env.HOSTNAME || '127.0.0.1'
    },
    database: {
        url: process.env.DBURL || '<%= dbURL %>'
    },
    root: path.normalize(__dirname + '/../../..'),<% if (useAuth) { %>
    // List of user roles in order of lowest privileges
    userRoles: ['guest', 'user', 'admin'],<% } %>
    staticAssets: 'client/.serve'<% if (useSecurity) { %>,
    security: {
        whitelists: {
            csrfWhitelist: [],
            cspWhitelist: [],
            xframeWhitelist: [],
            p3pWhitelist: [],
            hstsWhitelist: [],
            xssProtectionWhitelist: []
        },
        config: {
            csrf: true,
            csp: false,
            xframe: 'SAMEORIGIN',
            p3p: false,
            hsts: false,
            xssProtection: true
        }
    }<% } %>
};

// Export the config object based on the NODE_ENV
module.exports = _.merge(defaults, envConfig);
