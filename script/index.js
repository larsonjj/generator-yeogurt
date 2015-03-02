'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var getRootDir = require('../helpers/get-root-dir');
var path = require('path');

var ScriptGenerator = module.exports = function ScriptGenerator() {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  var fileJSON = this.config.get('config');

  // options
  this.jsOption = fileJSON.jsOption;
  this.useTesting = fileJSON.useTesting;
  this.testFramework = fileJSON.testFramework;
};

util.inherits(ScriptGenerator, yeoman.generators.NamedBase);

// Prompts
ScriptGenerator.prototype.ask = function ask() {

  var self = this;
  var done = this.async();
  var prompts = [{
    name: 'scriptFile',
    message: 'Where would you like to create this script?',
    default: 'client/scripts'
  }, {
    when: function() {
      return self.useTesting;
    },
    name: 'testFile',
    message: 'Where would you like to create this script\'s test?',
    default: 'test/spec'
  }];

  this.prompt(prompts, function(answers) {
    // Get root directory
    this.rootDir = getRootDir(answers.scriptFile);

    this.scriptFile = path.join(answers.scriptFile, this._.slugify(this.name.toLowerCase()));
    if (answers.testFile) {
      this.testFile = path.join(answers.testFile, '__tests__', this._.slugify(this.name.toLowerCase()));
    }
    done();
  }.bind(this));
};

// Create Files
ScriptGenerator.prototype.files = function files() {
  if (this.jsOption === 'none') {
    this.template('js/script.js', this.scriptFile + '.js');
    if (this.useTesting) {
      this.template('js/script.spec.js', this.testFile + '.spec.js');
    }
  }
  else if (this.jsOption === 'requirejs') {
    this.template('requirejs/script.js', this.scriptFile + '.js');
    if (this.useTesting) {
      this.template('requirejs/script.spec.js', this.testFile + '.spec.js');
    }
  }
  else if (this.jsOption === 'browserify') {
    this.template('browserify/script.js', this.scriptFile + '.js');
    if (this.useTesting) {
      this.template('browserify/script.spec.js', this.testFile + '.spec.js');
    }
  }
  else {
    return;
  }
};
