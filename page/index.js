'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var path = require('path');
var pjson = require(path.join(process.cwd(), './package.json'));
var config = pjson.config;
var directories = config.directories;

var PageGenerator = module.exports = function PageGenerator() {
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

util.inherits(PageGenerator, yeoman.generators.NamedBase);

// Prompts
PageGenerator.prototype.ask = function ask() {

  this.layout = 'base';
  if (this.options.layout) {
    this.layout = this.options.layout;
  }

  this.layoutDir = config ? directories.layouts : '_layouts';

  this.pageFile = path.join(
    config ? path.join(directories.source) : 'src/',
    this._.slugify(this.name.toLowerCase()),
    'index'
  );

};

PageGenerator.prototype.files = function files() {
  if (this.htmlOption === 'pug') {
    this.template('page.pug', this.pageFile + '.pug');
  }
  else if (this.htmlOption === 'nunjucks') {
    this.template('page.nunjucks', this.pageFile + '.nunjucks');
  }
};
