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
  this.cssOption = fileJSON.cssOption || 'css';
  this.sassSyntax = fileJSON.sassSyntax;
  this.testFramework = fileJSON.testFramework;
  this.useTesting = fileJSON.useTesting;
  this.htmlOption = fileJSON.htmlOption;
  this.useDashboard = fileJSON.useDashboard;

};

util.inherits(ModuleGenerator, yeoman.generators.NamedBase);

// Prompts
ModuleGenerator.prototype.ask = function ask() {

  var self = this;
  var done = this.async();
  var prompts = [{
    name: 'layoutFile',
    message: 'Where would you like to create this layout?',
    default: function(answers) {
      return yeogurtConf ? directories.source + '/' + directories.layouts : directories.source + '/_layouts';
    }
  }];

  this.prompt(prompts, function(answers) {

    this.layoutFile = path.join(
      answers.layoutFile,
      this._.slugify(this.name.toLowerCase()),
      this._.slugify(this.name.toLowerCase())
    );

    // Get source directory
    this.rootDir = getDirCount(this.layoutFile.replace(directories.source + '/' + directories.layouts + '/', ''));

    done();
  }.bind(this));
};

ModuleGenerator.prototype.files = function files() {
  if (this.htmlOption === 'jade') {
    this.template('layout.jade', this.layoutFile + '.jade');
  }
  else if (this.htmlOption === 'swig') {
    this.template('layout.swig', this.layoutFile + '.swig');
  }

  if (this.cssOption === 'sass') {
    if (this.sassSyntax === 'sass') {
      this.template('layout.css', this.layoutFile.replace('server', 'src') + '.sass');
    }
    else {
      this.template('layout.css', this.layoutFile.replace('server', 'src') + '.scss');
    }
  }
  else if (this.cssOption === 'less') {
    this.template('layout.css', this.layoutFile.replace('server', 'src') + '.less');
  }
  else if (this.cssOption === 'stylus') {
    this.template('layout.css', this.layoutFile.replace('server', 'src') + '.styl');
  }
};
