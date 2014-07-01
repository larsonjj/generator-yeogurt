'use strict';

var React = require('react');
var path = require('path');
var settings = require('../config/settings');
// setup transparent jsx requires
require('node-jsx').install();

// helper function for rendering a view with React on the Server-side
module.exports = function(data, template) {
    var JSX = require(path.join(settings.root, 'dev/scripts/views/') + template);
    var cleanedData = JSON.parse(JSON.stringify(data));

    return React.renderComponentToString(JSX(cleanedData));
};