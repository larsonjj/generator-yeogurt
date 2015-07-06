'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var path = require('path');
var yeogurtConf;

try {
  yeogurtConf = require(path.join(process.cwd(), './yeogurt.conf'));
  var directories = yeogurtConf.directories;
}
catch (e) {
  return; // Do Nothing
}

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

  this.layoutDir = yeogurtConf ? directories.layouts : '_layouts';

  this.pageFile = path.join(
    yeogurtConf ? path.join(directories.source) : 'src/',
    this._.slugify(this.name.toLowerCase()),
    'index'
  );

};

PageGenerator.prototype.files = function files() {
  if (this.htmlOption === 'jade') {
    this.template('page.jade', this.pageFile + '.jade');
  }
  else if (this.htmlOption === 'nunjucks') {
    this.template('page.nunjucks', this.pageFile + '.nunjucks');
  }
};
