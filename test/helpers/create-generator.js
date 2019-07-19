'use strict';

var fs = require('fs-extra');
var path = require('path');
var helpers = require('yeoman-test');

var createSubGenerator = function(type, options) {
  var _options = options || {};
  return helpers
    .run(path.join(__dirname, '../../generators/' + type))
    // .inTmpDir(function(dir) {
    //   // `dir` is the path to the new temporary directory
    //   fs.copySync(
    //     path.join(__dirname, '../subgenerators/temp'),
    //     dir
    //   );
    // })
    .withOptions({ ..._options });
};

var createAppGenerator = function(options) {
  var _options = options || {};
  return helpers
    .run(path.join(__dirname, '../../generators/app'))
    // .inTmpDir(function(dir) {
    //   // `dir` is the path to the new temporary directory
    //   fs.copySync(path.join(__dirname, '../app/temp'), dir);
    // })
    .withOptions({ 'skip-install': true, ..._options });
};

module.exports = {
  createSubGenerator: createSubGenerator,
  createAppGenerator: createAppGenerator
};
