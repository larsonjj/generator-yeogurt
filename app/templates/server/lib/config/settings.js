/**
 * Environment Settings
 */

'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname + '/../..');

var settings = {
    // Dev
    development: {
        app: {
            name: 'Yeogurt Dev'
        },
        server: {
            port: process.env.PORT || 3000,
            host: 'localhost'
        },
        database: {
            name: 'Yeogurt dev',
            url: '<%= dbURL %>',
            reconnect: {
                attempts: 5, // 0 = infinite
                timeBetweenAttempts: 5 // seconds
            }
        },
        root: rootPath,
        staticAssets: 'dev/.server',
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
        }
    },
    // Prod
    production: {
        app: {
            name: 'Yeogurt Prod'
        },
        server: {
            port: process.env.PORT || 3000,
            host: process.env.HOSTNAME || '127.0.0.1'
        },
        database: {
            name: 'prod',
            url: '<%= dbURL %>',
            reconnect: {
                attempts: 0,
                timeBetweenAttempts: 3 // seconds
            }
        },
        root: rootPath,
        staticAssets: 'dist',
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
        }
    }
};

module.exports = settings[process.env.NODE_ENV || 'development'];