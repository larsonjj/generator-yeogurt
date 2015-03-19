'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var getRootDir = require('../helpers/get-root-dir');
var path = require('path');

var ModelGenerator = module.exports = function ModelGenerator() {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  var fileJSON = this.config.get('config');

  // options
  this.jsFramework = fileJSON.jsFramework;
  this.jsOption = fileJSON.jsOption;
  this.singlePageApplication = fileJSON.singlePageApplication;
  this.testFramework = fileJSON.testFramework;
  this.useTesting = fileJSON.useTesting;

};

util.inherits(ModelGenerator, yeoman.generators.NamedBase);

// Prompts
ModelGenerator.prototype.ask = function ask() {
  if (!this.singlePageApplication) {
    this.log('This subgenerator is not available for Static Sites.\nOperation aborted');
    this.abort = true;
    return;
  }
  else if (this.jsFramework === 'react') {
    this.log('This subgenerator is not available for React application.\nOperation aborted');
    this.abort = true;
    return;
  }

  var self = this;
  var done = this.async();
  var prompts = [{
    name: 'modelFile',
    message: 'Where would you like to create this model?',
    default: 'client/app'
  }];

  this.prompt(prompts, function(answers) {
    // Get root directory
    this.rootDir = getRootDir(answers.modelFile);
    this.modelFile = path.join(
        answers.modelFile,
        this._.slugify(this.name.toLowerCase()),
        this._.slugify(this.name.toLowerCase())
      );

    this.testFile = path.join(
        answers.modelFile,
        this._.slugify(this.name.toLowerCase()),
        '__tests__',
        this._.slugify(this.name.toLowerCase())
      );
    done();
  }.bind(this));
};

// Create files
ModelGenerator.prototype.files = function files() {
  if (this.abort) {
    return;
  }

  if (this.jsOption === 'none') {
    this.template('js/model.js', this.modelFile + '.js');
    if (this.useTesting) {
      this.template('js/model.spec.js', this.testFile + '.spec.js');
    }
  }
  else if (this.jsOption === 'requirejs') {
    this.template('requirejs/model.js', this.modelFile + '.js');
    if (this.useTesting) {
      this.template('requirejs/model.spec.js', this.testFile + '.spec.js');
    }
  }
  else if (this.jsOption === 'browserify') {
    this.template('browserify/model.js', this.modelFile + '.js');
    if (this.useTesting) {
      this.template('browserify/model.spec.js', this.testFile + '.spec.js');
    }
  }
  else {
    return;
  }

};
