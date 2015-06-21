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

var PageGenerator = module.exports = function PageGenerator() {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  var fileJSON = this.config.get('config');

  // options
  this.projectName = fileJSON.projectName;
  this.jsOption = fileJSON.jsOption;
  this.cssOption = fileJSON.cssOption || 'css';
  this.sassSyntax = fileJSON.sassSyntax;
  this.testFramework = fileJSON.testFramework;
  this.useTesting = fileJSON.useTesting;
  this.htmlOption = fileJSON.htmlOption;
  this.useDashboard = fileJSON.useDashboard;

};

util.inherits(PageGenerator, yeoman.generators.NamedBase);

// Prompts
PageGenerator.prototype.ask = function ask() {

  var self = this;
  var done = this.async();
  var prompts = [{
    name: 'pageFile',
    message: 'Where would you like to create this page?',
    default: directories.source
  }, {
    name: 'useLayout',
    message: 'What layout would you like to extend from?',
    default: yeogurtConf ? directories.source + '/' + directories.layouts + '/base' : directories.source + '/_layouts/base'
  }];

  this.prompt(prompts, function(answers) {

    this.type = answers.type;
    this.useLayout = answers.useLayout ? answers.useLayout.replace(directories.source + '/', '') : false;

    this.pageFile = path.join(
      answers.pageFile,
      this._.slugify(this.name.toLowerCase()),
      'index'
    );

    // Get source directory
    this.rootDir = getDirCount(this.pageFile.replace(directories.source + '/', ''));

    this.dashFile = path.join(
        answers.pageFile,
        this._.slugify(this.name.toLowerCase()),
        '__dash__',
        this._.slugify(this.name.toLowerCase()) + '.dash'
      );

    done();
  }.bind(this));
};

PageGenerator.prototype.files = function files() {
  if (this.htmlOption === 'jade') {
    this.template('page.jade', this.pageFile + '.jade');
    if (this.useDashboard) {
      this.template('page.dash.json', this.dashFile + '.json');
    }
  }
  else if (this.htmlOption === 'nunjucks') {
    this.template('page.nunjucks', this.pageFile + '.nunjucks');
    if (this.useDashboard) {
      this.template('page.dash.json', this.dashFile + '.json');
    }
  }
};
