'use strict';

var path = require('path');
var _ = require('lodash');
var envConfig = require('./' + process.env.NODE_ENV || 'development' + '.js') || {};

// All configurations will extend these options
var defaults = {
    server: {
        port: process.env.PORT || 9010,
        host: process.env.HOSTNAME || '127.0.0.1'
    },
    database: {
        url: '<%= dbURL %>'
    },
    root: path.normalize(__dirname + '/../../..'),
    staticAssets: 'client/.serve',
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
};

// Export the config object based on the NODE_ENV
module.exports = _.merge(defaults, envConfig);
