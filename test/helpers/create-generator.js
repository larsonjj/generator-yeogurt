'use strict';

var yeoman = require('yeoman-generator');
var fs = require('fs-extra');
var path = require('path');
var helpersOld = yeoman.test;
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var Output  = require('../helpers/mute');

var createSubGenerator = function(type, args, options, mockPrompts, asserts) {
  var _options = options || {};
  var _path = _options.path || '../../../';
  var subGenerator = helpersOld.createGenerator('yeogurt:' + type, [
    _path + '/' + type
  ], args, _options);

  subGenerator.on('start', Output.mute);
  subGenerator.on('end', Output.unmute);

  helpersOld.mockPrompt(subGenerator, mockPrompts);

  subGenerator.run([], function() {
    asserts();
  });
};

var createAppGenerator = function(options) {
  var _options = options || {};
  return helpers
      .run(path.join(__dirname, '../../app'))
      .inTmpDir(function(dir) {
        // `dir` is the path to the new temporary directory
        fs.copySync(path.join(__dirname, '../app/temp'), dir);
      })
      .withOptions({ 'skip-install': true, ..._options })

};

module.exports = {
  createSubGenerator: createSubGenerator,
  createAppGenerator: createAppGenerator
};
