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

  var moduleDir = yeogurtConf ?
    path.join(directories.source, directories.modules) :
    'src' + '/_modules';

  this.moduleFile = path.join(
      moduleDir,
      this._.slugify(this.name.toLowerCase()),
      this._.slugify(this.name.toLowerCase())
    );

  this.testFile = path.join(
      moduleDir,
      this._.slugify(this.name.toLowerCase()),
      'tests',
      this._.slugify(this.name.toLowerCase())
    );

  if (this.atomic) {
    var done = this.async();
    var prompts = [{
      name: 'atomicType',
      type: 'list',
      message: 'What type of atomic module is this?',
      choices: ['Atom', 'Molecule', 'Organism'],
      filter: function(val) {
        var filterMap = {
          'Atom': 'atom',
          'Molecule': 'molecule',
          'Organism': 'organism'
        };

        return filterMap[val];
      }
    }];

    this.prompt(prompts, function(answers) {

      this.moduleFile = path.join(
        moduleDir,
        answers.atomicType + 's',
        this._.slugify(this.name.toLowerCase()),
        this._.slugify(this.name.toLowerCase())
      );

      this.testFile = path.join(
        moduleDir,
        answers.atomicType + 's',
        this._.slugify(this.name.toLowerCase()),
        'tests',
        this._.slugify(this.name.toLowerCase())
      );

      done();
    }.bind(this));
  }
};

ModuleGenerator.prototype.files = function files() {

  if (this.htmlOption === 'jade') {
    this.template('module.jade', this.moduleFile + '.jade');
    this.template('module.js', this.moduleFile + '.js');
    if (this.testFramework !== 'none') {
      this.template('module.spec.js', this.testFile + '.spec.js');
    }
  }
  else if (this.htmlOption === 'nunjucks') {
    this.template('module.nunjucks', this.moduleFile + '.nunjucks');
    this.template('module.js', this.moduleFile + '.js');
    if (this.testFramework !== 'none') {
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
