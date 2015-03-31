/**
 * GET /  ->  <%= _.camelize(name.toLowerCase())  %>
 */

'use strict';

var _ = require('lodash');

// Get list of data
var index = function(req, res) {
  return res.render('./<%= _.slugify(name.toLowerCase())  %>');
};

module.exports = {
  index: index
};
