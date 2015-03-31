/**
 * GET /  ->  <%= _.camelize(name.toLowerCase())  %>
 */

'use strict';

// Get list of data
var index = function(req, res) {
  return res.render('<%= moduleFile.replace("server/", "") %>');
};

module.exports = {
  index: index
};
