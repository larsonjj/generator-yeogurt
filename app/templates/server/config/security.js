/**
 * Security Configuration
 */

'use strict';

var _ = require('lodash');
var lusca = require('lusca');
var settings = require('./env/default');

/**
 * Set's up Paypal's lusca security module with white-listed routes
 */
var securityConfig = function(req, res, next) {

    for (var prop in settings.security.whitelists) {
        // Conditional whitelisted URLs.
        if (_.contains(settings.security.whitelists[prop], req.path)) {
            settings.security.config[prop.replace('Whitelist', '')] = false;
            console.log('"' + req.path + '" is white-listed for: ' + prop.replace('Whitelist', ''));
        }
    }<% if (singlePageApplication) { %>

    // allow XHR requests to bypass CSRF
    // since they will be authenticated by token
    if (req.xhr) {
        settings.security.config.csrf = false;
    }<% } %>

    var init = lusca(settings.security.config);

    return init(req, res, next);
};

module.exports = securityConfig;
