/**
 * React Render
 */
'use strict';

var React = require('react');
var path = require('path');
var settings = require('../config/env/default');<% if (useJsx) { %>
// setup transparent jsx requires
require('node-jsx').install();<% } %>

// helper function for rendering a view with React on the Server-side
var reactHelper = function(data, template) {

    // Retrieve specified component file
    var component = require(path.join(settings.root, 'client/scripts/components/') + template);

    // Convert data to workable JavaScript object
    var cleanedData = JSON.parse(JSON.stringify(data));

    // Return compiled component template with passed in data
    return React.renderComponentToString(component(cleanedData));
};

module.exports = reactHelper;