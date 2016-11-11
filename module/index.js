'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var path = require('path');
var pjson = require(path.join(process.cwd(), './package.json'));
var config = pjson.config;
var directories = config.directories;

require('colors');

var ModuleGenerator = module.exports = function ModuleGenerator() {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  this.option('atomic', {
    desc: 'Defines if this module is used in atomic design. ' +
      'if so, allow it to be put in a atom, molecule, or organism folder',
    type: Boolean,
    required: false
  });

  var fileJSON = this.config.get('config');

  // options
  this.projectName = fileJSON.projectName;
  this.jsFramework = fileJSON.jsFramework;
  this.singlePageApplication = fileJSON.singlePageApplication;
  this.jsOption = fileJSON.jsOption;
  this.jsPreprocessor = fileJSON.jsPreprocessor;
  this.jsTemplate = fileJSON.jsTemplate;
  this.cssOption = fileJSON.cssOption;
  this.sassSyntax = fileJSON.sassSyntax;
  this.testFramework = fileJSON.testFramework;
  this.htmlOption = fileJSON.htmlOption;

};

util.inherits(ModuleGenerator, yeoman.generators.NamedBase);

// Prompts
ModuleGenerator.prototype.ask = function ask() {
  this.atomic = false;
  if (this.options.atomic) {
    this.atomic = this.options.atomic;
  }

  var moduleDir = config ?
    path.join(directories.source, directories.modules) :
    'src' + '/_modules';

  // Clean each part of the passed in path into usable file paths
  // /each sdf.SDF => /each-sdf/sdf
  this.path = this.name.split('/')
    .map(function(item) {
      return this._.slugify(item.toLowerCase());
    }.bind(this))
    .join('/');

  // Get the last piece of the path
  // Ex: `button` of `cool/awesome/button`
  this.name = this.name.split('/').slice(-1)[0];

  this.moduleFile = path.join(
    moduleDir,
    this.path,
    this.name
  );

  this.testFile = path.join(
    moduleDir,
    this.path,
    'tests',
    this.name
  );

  if (['atom', 'molecule', 'organism'].indexOf(this.atomic) > -1) {
    this.moduleFile = path.join(
      moduleDir,
      this.atomic + 's',
      this.path,
      this.name
    );

    this.testFile = path.join(
      moduleDir,
      this.atomic + 's',
      this.path,
      'tests',
      this.name
    );
  }
  else if (this.atomic) {
    console.error('Error: Incorrect value given for --atomic option: '.red + this.atomic);
    console.error('Error: Only "atom", "molecule", or "organism" are valid values.'.red);
    this.abort = true;
  }
};

ModuleGenerator.prototype.files = function files() {

  if (this.abort) {
    return;
  }

  if (this.htmlOption === 'pug') {
    this.template('module.pug', this.moduleFile + '.pug');
    if (this.jsPreprocessor === 'none') {
      this.template('module.js', this.moduleFile + '.js');
    }
    else {
      this.template('module.es6.js', this.moduleFile + '.js');
    }
    if (this.testFramework !== 'none') {
      if (this.jsPreprocessor === 'none') {
        this.template('module.test.js', this.testFile + '.test.js');
      }
      else {
        this.template('module.test.es6.js', this.testFile + '.test.js');
      }
    }
  }
  else if (this.htmlOption === 'nunjucks') {
    this.template('module.nunjucks', this.moduleFile + '.nunjucks');
    this.template('module.js', this.moduleFile + '.js');
    if (this.jsPreprocessor === 'none') {
      this.template('module.test.js', this.testFile + '.test.js');
    }
    else {
      this.template('module.test.es6.js', this.testFile + '.test.js');
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
