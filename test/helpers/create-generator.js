'use strict';

var path = require('path');
var fs = require('fs-extra');
var helpers = require('yeoman-test');

var createSubGenerator = function(type, options) {
  var _options = options || {};
  return helpers
    .run(path.join(__dirname, '../../generators/' + type))
    .inDir(path.join(__dirname, '../subgenerators/temp'), function(dir) {
      var done = this.async(); // `this` is the RunContext object.
      fs.copy(path.join(__dirname, '../app/temp'), dir, done);
    })
    .withOptions({ ..._options });
};

var createAppGenerator = function(options) {
  var _options = options || {};
  return helpers
    .run(path.join(__dirname, '../../generators/app'))
    .inDir(path.join(__dirname, '../app/temp'))
    .withOptions({ 'skip-install': true, ..._options });
};

module.exports = {
  createSubGenerator: createSubGenerator,
  createAppGenerator: createAppGenerator
};
