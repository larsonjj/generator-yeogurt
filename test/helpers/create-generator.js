'use strict';

var yeoman = require('yeoman-generator');
var helpers = yeoman.test;
var Output  = require('../helpers/mute');

var createSubGenerator = function(type, args, options, mockPrompts, asserts) {
  var _options = options || {};
  var _path = _options.path || '../../../';
  var subGenerator = helpers.createGenerator('yeogurt:' + type, [
    _path + '/' + type
  ], args, _options);

  subGenerator.on('start', Output.mute);
  subGenerator.on('end', Output.unmute);

  helpers.mockPrompt(subGenerator, mockPrompts);

  subGenerator.run([], function() {
    asserts();
  });
};

var createAppGenerator = function(args, options) {
  var _options = options || {};
  var _path = _options.path || '../../../app';
  var app = helpers.createGenerator('yeogurt:app', [
    _path
  ], args, _options);

  app.options['skip-install'] = true;

  // Prevent Yeoman writes while the generator runs
  // and reenable them when it's finished to see the test results
  app.on('start', Output.mute);
  app.on('end', Output.unmute);

  return app;
};

module.exports = {
  createSubGenerator: createSubGenerator,
  createAppGenerator: createAppGenerator
};
