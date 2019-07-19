'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var path = require('path');
var pjson = require(path.join(process.cwd(), './package.json'));
var config = pjson.config;
var directories = config.directories;
var copyTpl = require('../helpers/copy').copyTpl;
var copy = require('../helpers/copy').copy;

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
  // /each_sdf.SDF => /each_sdf/sdf
  this.path = this.name.split('/')
    .map(function(item) {
      return item.toLowerCase();
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

  var htmlSuffix = (this.htmlOption === 'jade') ? '.jade' : '.nunjucks';
  var jsSuffix = '.js';
  var cssSuffix = _getCssSuffix(this.cssOption, this.sassSyntax);

  this.template(('module' + htmlSuffix), (this.moduleFile + htmlSuffix));
  this.template(('module' + jsSuffix), (this.moduleFile + '.js'));
  this.template(('module.test' + jsSuffix), (this.testFile + '.test.js'));
  this.template(('module.css'), (this.moduleFile + cssSuffix));

  function _getCssSuffix(cssOption, sassSyntax) {
    var sassSuffix = (sassSyntax === 'sass') ? '.sass' : '.scss'

    var _result = '.less';
    _result = (cssOption === 'sass') ? sassSuffix : _result;
    _result = (cssOption === 'stylus') ? '.styl' : _result;

    return _result;
  }
};
