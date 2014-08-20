'use strict';

var _ = require('lodash');
var path = require('path');
var fs = require('fs');
var settings = require('../config/env/default');

// helper function for rendering a view with Handlebars on the Server-side
var hbsHelper = function(data, template) {
    var templateStr = fs.readFileSync( path.join(settings.root, 'client/templates/') + template, 'utf8' );

    // Convert data to workable JavaScript object
    var cleanedData = JSON.parse(JSON.stringify(data));

    // Compile and return template with passed data
    return _.template(templateStr, cleanedData);
};

module.exports = hbsHelper;