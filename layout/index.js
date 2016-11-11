'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var path = require('path');
var pjson = require(path.join(process.cwd(), './package.json'));
var config = pjson.config;
var directories = config.directories;

var ModuleGenerator = module.exports = function ModuleGenerator() {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);
  this.option('layout', {
    desc: 'Allow a custom layout for template to extend from',
    type: String,
    required: false
  });

  var fileJSON = this.config.get('config');

  // options
  this.projectName = fileJSON.projectName;
  this.htmlOption = fileJSON.htmlOption;

};

util.inherits(ModuleGenerator, yeoman.generators.NamedBase);

// Prompts
ModuleGenerator.prototype.ask = function ask() {

  this.layout = 'base';
  if (this.options.layout) {
    this.layout = this.options.layout;
  }

  this.layoutFile = path.join(
    config ? path.join(directories.source, directories.layouts) : 'src/_layouts',
    this._.slugify(this.name.toLowerCase())
  );

};

ModuleGenerator.prototype.files = function files() {
  if (this.htmlOption === 'pug') {
    this.template('layout.pug', this.layoutFile + '.pug');
  }
  else if (this.htmlOption === 'nunjucks') {
    this.template('layout.nunjucks', this.layoutFile + '.nunjucks');
  }
};
