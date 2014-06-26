/*global _: true*/
/**
 * Module dependencies.
 */

'use strict';

var _ = require('underscore');
var lusca = require('lusca');
var settings = require('./settings');

/**
 * Takes in express req, res, and next parameters and sets up
 * CSRF (Cross-Site Request Forgery) Token protection
 * @param  {object}   req  Standard express request object
 * @param  {object}   res  Standard express response object
 * @param  {Function} next Callback to inform server to move onto next operation
 * @return {Function}      Execute  passed Paypal lusca protection module
 */
module.exports = function(req, res, next) {

    for (var prop in settings.security.whitelists) {
        // Conditional whitelisted URLs.
        if (_.contains(settings.security.whitelists[prop], req.path)) {
            settings.security.config[prop.replace('Whitelist', '')] = false;
            console.log('"' + req.path + '" is whitelisted for: ' + prop.replace('Whitelist', ''));
        }
    }

    var init = lusca(settings.security.config);

    return init(req, res, next);
};
