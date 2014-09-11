/*global _: true*/
/**
 * Security Configuration
 */

'use strict';

var _ = require('lodash');
var lusca = require('lusca');
var settings = require('./env/default');

/**
 * Takes in express req, res, and next parameters and sets up
 * Paypal lusca module with white-listed routes
 */
var securityConfig = function(req, res, next) {

    for (var prop in settings.security.whitelists) {
        // Conditional whitelisted URLs.
        if (_.contains(settings.security.whitelists[prop], req.path)) {
            settings.security.config[prop.replace('Whitelist', '')] = false;
            console.log('"' + req.path + '" is white-listed for: ' + prop.replace('Whitelist', ''));
        }
    }

    var init = lusca(settings.security.config);

    return init(req, res, next);
};

module.exports = securityConfig;