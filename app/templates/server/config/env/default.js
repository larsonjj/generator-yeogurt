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
        url: process.env.DBURL || '<%= dbURL %>',<% if (dbOption === 'mongodb') { %>
        options: {
            server: {
                socketOptions: {
                    // Keep connection alive while server is running
                    keepAlive: 1
                }
            },
            // Attempt to reconnect if connection is lost
            auto_reconnect: true
        }<% } %><% if (dbOption === 'mysql') { %>
        options: {
            // Database Type
            dialect: 'mysql',

            // max concurrent database requests; default: 50
            maxConcurrentQueries: 50,

            // disable inserting undefined values as NULL
            // - default: false
            omitNull: false,

            // a flag for using a native library or not.
            // in the case of 'pg' -- set this to true will allow SSL support
            // - default: false
            native: false,

            // Specify options, which are used when sequelize.define is called.
            // The following example:
            //   define: {timestamps: false}
            // is basically the same as:
            //   sequelize.define(name, attributes, { timestamps: false })
            // so defining the timestamps for each model will be not necessary
            define: {
                lodashd: false,
                freezeTableName: false,
                charset: 'utf8',
                collate: 'utf8_general_ci',
                timestamps: true
            },

            // similiar for sync: you can define this to always force sync for models
            sync: {
                force: false
            },

            // sync after each association (see below). If set to false, you need to sync manually after setting all associations. Default: true
            syncOnAssociation: true,

            // use pooling in order to reduce db connection overload and to increase speed
            // currently only for mysql and postgresql (since v1.5.0)
            pool: {
                maxConnections: 5,
                maxIdleTime: 30
            },

            // language is used to determine how to translate words into singular or plural form based on the [lingo project](https://github.com/visionmedia/lingo)
            // options are: en [default], es
            language: 'en'
        }<% } %>
    },
    root: path.normalize(__dirname + '/../../..'),<% if (useAuth) { %>
    // List of user roles in order of lowest privileges
    userRoles: ['guest', 'user', 'admin'],<% } %>
    staticAssets: 'client/.serve'<% if (useSecurity) { %>,
    security: {
        // Arrays of URLs to whitelist from security policies
        whitelists: {
            csrfWhitelist: [],
            cspWhitelist: [],
            xframeWhitelist: [],
            p3pWhitelist: [],
            hstsWhitelist: [],
            xssProtectionWhitelist: []
        },
        // Lusca security configuration
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
