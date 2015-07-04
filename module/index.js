'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var getDirCount = require('../helpers/get-dir-count');
var path = require('path');
var yeogurtConf;

try {
  yeogurtConf = require(path.join(process.cwd(), './yeogurt.conf'));
  var directories = yeogurtConf.directories;
}
catch(e) {
  return; // Do Nothing
}

var ModuleGenerator = module.exports = function ModuleGenerator() {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  var fileJSON = this.config.get('config');

  // options
  this.projectName = fileJSON.projectName;
  this.jsFramework = fileJSON.jsFramework;
  this.singlePageApplication = fileJSON.singlePageApplication;
  this.jsOption = fileJSON.jsOption;
  this.jsTemplate = fileJSON.jsTemplate;
  this.cssOption = fileJSON.cssOption;
  this.sassSyntax = fileJSON.sassSyntax;
  this.testFramework = fileJSON.testFramework;
  this.useTesting = fileJSON.useTesting;
  this.htmlOption = fileJSON.htmlOption;

};

util.inherits(ModuleGenerator, yeoman.generators.NamedBase);

// Prompts
ModuleGenerator.prototype.ask = function ask() {

  var self = this;
  var done = this.async();
  var prompts = [{
    name: 'moduleFile',
    message: 'Where would you like to create this module?',
    default: function(answers) {
      return yeogurtConf ? directories.source + '/' + directories.modules : directories.source + '/_modules';
    }
  }];

  this.prompt(prompts, function(answers) {

    this.templateFile = path.join(
      answers.moduleFile,
      this._.slugify(this.name.toLowerCase()),
      this._.slugify(this.name.toLowerCase())
    );

    this.moduleFile = path.join(
      answers.moduleFile,
      this._.slugify(this.name.toLowerCase()),
      this._.slugify(this.name.toLowerCase())
    );

    // Get source directory
    this.rootDir = getDirCount(this.moduleFile.replace(directories.source + '/', ''));

    this.testFile = path.join(
      answers.moduleFile,
      this._.slugify(this.name.toLowerCase()),
      'tests',
      this._.slugify(this.name.toLowerCase())
    );

    done();
  }.bind(this));
};

ModuleGenerator.prototype.files = function files() {

  if (this.htmlOption === 'jade') {
    this.template('module.jade', this.moduleFile + '.jade');
    this.template('module.js', this.moduleFile + '.js');
    if (this.useTesting) {
      this.template('module.spec.js', this.testFile + '.spec.js');
    }
  }
  else if (this.htmlOption === 'nunjucks') {
    this.template('module.nunjucks', this.moduleFile + '.nunjucks');
    this.template('module.js', this.moduleFile + '.js');
    if (this.useTesting) {
      this.template('module.spec.js', this.testFile + '.spec.js');
    }
  }

  if (this.cssOption === 'sass') {
    if (this.sassSyntax === 'sass') {
      this.template('module.css', this.moduleFile + '.sass');
    }
    else {
      this.template('module.css', this.moduleFile + '.scss');
    }
  }
  else if (this.cssOption === 'less') {
    this.template('module.css', this.moduleFile + '.less');
  }
  else if (this.cssOption === 'stylus') {
    this.template('module.css', this.moduleFile + '.styl');
  }
};
