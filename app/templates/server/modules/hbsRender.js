'use strict';

var Handlebars = require('handlebars');
var path = require('path');
var fs = require('fs');
var settings = require('../config/env/default');

// helper function for rendering a view with Handlebars on the Server-side
var hbsHelper = function(data, template) {
    var templateStr = fs.readFileSync( path.join(settings.root, 'dev/templates/') + template, 'utf8' );

    // Compile from Handlebars to JavaScript template
    var compiledSrc = Handlebars.compile(templateStr);

    // Convert data to workable JavaScript object
    var cleanedData = JSON.parse(JSON.stringify(data));

    // Return template with passed in data
    return compiledSrc(cleanedData);
};

module.exports = hbsHelper;