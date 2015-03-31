'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var getRootDir = require('../helpers/get-root-dir');
var path = require('path');

var CollectionGenerator = module.exports = function CollectionGenerator() {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  var fileJSON = this.config.get('config');

  // options
  this.useModel = this.options.model || false;
  this.jsFramework = fileJSON.jsFramework;
  this.jsOption = fileJSON.jsOption;
  this.singlePageApplication = fileJSON.singlePageApplication;
  this.testFramework = fileJSON.testFramework;
  this.useTesting = fileJSON.useTesting;

};

util.inherits(CollectionGenerator, yeoman.generators.NamedBase);

// Prompts
CollectionGenerator.prototype.ask = function ask() {
  if (this.jsFramework !== 'backbone') {
    this.log('This subgenerator is only used for Backbone Applications. It seems as though you are not using Backbone');
    this.log('Operation aborted');
    this.abort = true;
    return;
  }

  var self = this;
  var done = this.async();
  var prompts = [{
    name: 'collectionFile',
    message: 'Where would you like to create this collection?',
    default: 'client/app'
  }, {
    name: 'existingModelName',
    message: 'What is the name of the model you would like to use with this collection?',
    default: this.name + '-model'
  }, {
    name: 'existingModelLocation',
    message: 'What folder is the model file located in?',
    default: 'client/app'
  }];

  this.prompt(prompts, function(answers) {
    // Get root directory
    this.rootDir = getRootDir(answers.collectionFile);
    this.modelName = answers.existingModelName;

    this.collectionFile = path.join(
        answers.collectionFile,
        this._.slugify(this.name.toLowerCase()),
        this._.slugify(this.name.toLowerCase())
      );
    this.modelFile = path.join(answers.existingModelLocation, this._.slugify(answers.existingModelName.toLowerCase()));

    this.testFile = path.join(
        answers.collectionFile,
        this._.slugify(this.name.toLowerCase()),
        '__tests__',
        this._.slugify(this.name.toLowerCase())
      );

    done();
  }.bind(this));
};

// Create files
CollectionGenerator.prototype.files = function files() {
  if (this.abort) {
    return;
  }

  if (this.jsOption === 'none') {
    this.template('js/collection.js', this.collectionFile + '.js');
    if (this.useTesting) {
      this.template('js/collection.spec.js', this.testFile + '.spec.js');
    }
  }
  else if (this.jsOption === 'requirejs') {
    this.template('requirejs/collection.js', this.collectionFile + '.js');
    if (this.useTesting) {
      this.template('requirejs/collection.spec.js', this.testFile + '.spec.js');
    }
  }
  else if (this.jsOption === 'browserify') {
    this.template('browserify/collection.js', this.collectionFile + '.js');
    if (this.useTesting) {
      this.template('browserify/collection.spec.js', this.testFile + '.spec.js');
    }
  }

};
