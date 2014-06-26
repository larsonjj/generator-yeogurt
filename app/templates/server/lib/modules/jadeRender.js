'use strict';

var jade = require('jade');
var path = require('path');
var settings = require('../config/settings');

// helper function for rendering a view with Jade on the Server-side
module.exports = function(res, data, template) {

    // Setup data to be passed to template
    var options = {
        globals: data
    };

    // Setup nicely formatted HTML if in development, otherwise compress it
    if (settings.hasOwnProperty('development')) {
        options.pretty = true;
    }
    else {
        options.pretty = false;
    }

    return jade.renderFile(path.join(settings.root, 'dev/templates/') + template, options, function (err, html) {
        if (err) {
            throw err;
        }
        return html;
    });
};