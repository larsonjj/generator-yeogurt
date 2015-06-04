'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var getRootDir = require('../helpers/get-root-dir');
var path = require('path');

var FluxGenerator = module.exports = function FluxGenerator() {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  var fileJSON = this.config.get('config');

  // options
  this.jsFramework = fileJSON.jsFramework;
  this.testFramework = fileJSON.testFramework;
  this.useTesting = fileJSON.useTesting;

};

util.inherits(FluxGenerator, yeoman.generators.NamedBase);

// Prompts
FluxGenerator.prototype.ask = function ask() {

  if (this.jsFramework !== 'react') {
    this.log('This subgenerator is only used for React Applications. It seems as though you are not using React');
    this.log('Operation aborted');
    this.abort = true;
    return;
  }

  var done = this.async();
  var prompts = [{
    name: 'fluxFile',
    message: 'Where would you like to create flux files?',
    default: 'src/_scripts'
  }];

  this.prompt(prompts, function(answers) {

    this.fluxFile = path.join(
        answers.fluxFile,
        this._.slugify(this.name.toLowerCase()),
        this._.slugify(this.name.toLowerCase())
      );
    // Get root directory
    this.rootDir = getRootDir(this.fluxFile);
    this.testFile = path.join(
        answers.fluxFile,
        this._.slugify(this.name.toLowerCase()),
        '__tests__',
        this._.slugify(this.name.toLowerCase())
      );
    done();
  }.bind(this));
};

// Create files
FluxGenerator.prototype.files = function files() {
  if (this.abort) {
    return;
  }

  // Create constant, action, and store files
  this.template('constant.js', this.fluxFile + '.constants.js');
  this.template('action.js', this.fluxFile + '.actions.js');
  this.template('store.js', this.fluxFile + '.store.js');

  if (this.useTesting) {
    this.template('spec.js', this.testFile + '.spec.js');
  }

};
