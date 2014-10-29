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
    }<% if (useJwt) { %>

    // allow access_token header/query parameter to bypass CSRF
    if (req.body && req.body.hasOwnProperty('access_token') || req.headers.authorization) {
        settings.security.config.csrf = false;
    }<% } %>

    var init = lusca(settings.security.config);

    return init(req, res, next);
};

module.exports = securityConfig;
