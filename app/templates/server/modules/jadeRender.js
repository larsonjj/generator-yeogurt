'use strict';

var jade = require('jade');
var path = require('path');
var settings = require('../config/env/default');

// helper function for rendering a view with Jade on the Server-side
var jadeHelper = function(data, template) {

    // Convert data to workable JavaScript object
    var cleanedData = JSON.parse(JSON.stringify(data));

    // Setup data to be passed to template
    var options = {
        globals: cleanedData
    };

    // Setup nicely formatted HTML if in development, otherwise compress it
    if (settings.hasOwnProperty('development')) {
        options.pretty = true;
    }
    else {
        options.pretty = false;
    }

    // Compile from Jade to HTML String
    return jade.renderFile(path.join(settings.root, 'client/templates/') + template, options, function (err, html) {
        if (err) {
            throw err;
        }
        return html;
    });
};

module.exports = jadeHelper;