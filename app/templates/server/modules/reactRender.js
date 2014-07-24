'use strict';

var React = require('react');
var path = require('path');
var settings = require('../config/env/default');
// setup transparent jsx requires
require('node-jsx').install();

// helper function for rendering a view with React on the Server-side
var reactHelper = function(data, template) {

    // Retrieve specified JSX file
    var JSX = require(path.join(settings.root, 'client/scripts/views/') + template);

    // Convert data to workable JavaScript object
    var cleanedData = JSON.parse(JSON.stringify(data));

    // Return compiled JSX template with passed in data
    return React.renderComponentToString(JSX(cleanedData));
};

module.exports = reactHelper;