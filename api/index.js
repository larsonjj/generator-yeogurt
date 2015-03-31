'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var getRootDir = require('../helpers/get-root-dir');
var path = require('path');

var APIGenerator = module.exports = function APIGenerator() {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  var fileJSON = this.config.get('config');

  // options
  this.jsFramework = fileJSON.jsFramework;
  this.testFramework = fileJSON.testFramework;
  this.useTesting = fileJSON.useTesting;
  this.useServer = fileJSON.useServer;
  this.useServerTesting = fileJSON.useServerTesting;

};

util.inherits(APIGenerator, yeoman.generators.NamedBase);

// Prompts
APIGenerator.prototype.ask = function ask() {

  if (!this.useServer) {
    this.log('This subgenerator is only used for Server Applications. It seems as though you are not using a Server');
    this.log('Operation aborted');
    this.abort = true;
    return;
  }

  var self = this;
  var done = this.async();
  var prompts = [{
    name: 'apiFile',
    message: 'Where would you like to create api files?',
    default: 'server/app/api'
  }];

  this.prompt(prompts, function(answers) {
    // Get root directory
    this.rootDir = getRootDir(answers.apiFile);

    this.apiFile = path.join(
        answers.apiFile,
        this._.slugify(this.name.toLowerCase()),
        this._.slugify(this.name.toLowerCase())
      );

    this.packageFile = path.join(
        answers.apiFile,
        this._.slugify(this.name.toLowerCase()),
        'package'
      );

    this.testFile = path.join(
        answers.apiFile,
        this._.slugify(this.name.toLowerCase()),
        '__tests__',
        this._.slugify(this.name.toLowerCase())
      );
    done();
  }.bind(this));
};

// Create files
APIGenerator.prototype.files = function files() {
  if (this.abort) {
    return;
  }

  // Create constant, action, and store files
  this.template('api.js', this.apiFile + '.js');
  this.template('api.controller.js', this.apiFile + '.controller.js');
  this.template('api.model.js', this.apiFile + '.model.js');
  this.template('package.json', this.packageFile + '.json');

  if (this.useTesting) {
    this.template('api.spec.js', this.testFile + '.spec.js');
  }

};
