'use strict';

var path = require('path');
var helpers = require('yeoman-test');

var createSubGenerator = function(type, options) {
  var _options = options || {};
  return helpers
    .run(path.join(__dirname, '../../generators/' + type))
    .withOptions({ ..._options });
};

var createAppGenerator = function(options) {
  var _options = options || {};
  return helpers
    .run(path.join(__dirname, '../../generators/app'))
    .withOptions({ 'skip-install': true, ..._options });
};

module.exports = {
  createSubGenerator: createSubGenerator,
  createAppGenerator: createAppGenerator
};
