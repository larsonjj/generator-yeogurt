'use strict';

var _ = require('lodash');
var path = require('path');
var Generator = require('yeoman-generator');
var pjson = require(path.join(process.cwd(), './package.json'));
var config = pjson.config;
var directories = config.directories;
var copyTpl = require('../helpers/copy').copyTpl;

require('colors');
_.mixin({ 'pascalCase': _.flow(_.camelCase, _.upperFirst) });

module.exports = class extends Generator {
  initializing() {
    var fileJSON = this.config.get('config');
    // Setup copy helpers
    this.copyTpl = copyTpl.bind(this);

    // options
    this.projectName = fileJSON.projectName;
    this.jsFramework = fileJSON.jsFramework;
    this.singlePageApplication = fileJSON.singlePageApplication;
    this.jsTemplate = fileJSON.jsTemplate;
    this.cssOption = fileJSON.cssOption;
    this.sassSyntax = fileJSON.sassSyntax;
    this.testFramework = fileJSON.testFramework;
    this.htmlOption = fileJSON.htmlOption;

    this.option('atomic', {
      desc:
        'Defines if this module is used in atomic design. ' +
        'if so, allow it to be put in a atom, molecule, or organism folder',
      type: Boolean,
      required: false
    });

    this.name = 'no-name';
    if (this.arguments[0]) {
      // Get the last piece of the path
      // Ex: `button` of `cool/awesome/button`
      this.name = this.arguments[0].split('/').slice(-1)[0];
    }

    this.atomic = false;
    if (this.options.atomic) {
      this.atomic = this.options.atomic;
    }

    var moduleDir = config
      ? path.join(directories.source, directories.modules)
      : 'src' + '/_modules';

    // Clean each part of the passed in path into usable file paths
    // /each_sdf.SDF => /each_sdf/sdf
    this.path = this.name
      .split('/')
      .map(
        function(item) {
          return item.toLowerCase();
        }.bind(this)
      )
      .join('/');

    this.moduleFile = path.join(moduleDir, this.path, this.name);

    this.testFile = path.join(moduleDir, this.path, 'tests', this.name);

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
    } else if (this.atomic) {
      console.error(
        'Error: Incorrect value given for --atomic option: '.red + this.atomic
      );
      console.error(
        'Error: Only "atom", "molecule", or "organism" are valid values.'.red
      );
      this.abort = true;
    }
  }

  writing() {
    const templateData = {
      _: _,
      name: this.name
    };

    if (this.abort) {
      return;
    }

    var htmlSuffix = this.htmlOption === 'jade' ? '.jade' : '.nunjucks';
    var jsSuffix = '.js';
    var cssSuffix = this.getCssSuffix(this.cssOption, this.sassSyntax);

    this.copyTpl(
      'module' + htmlSuffix,
      this.moduleFile + htmlSuffix,
      templateData
    );
    this.copyTpl('module' + jsSuffix, this.moduleFile + '.js', templateData);
    this.copyTpl(
      'module.test' + jsSuffix,
      this.testFile + '.test.js',
      templateData
    );
    this.copyTpl('module.css', this.moduleFile + cssSuffix, templateData);
  }

  getCssSuffix(cssOption, sassSyntax) {
    var sassSuffix = sassSyntax === 'sass' ? '.sass' : '.scss';

    var _result = '.less';
    _result = cssOption === 'sass' ? sassSuffix : _result;
    _result = cssOption === 'stylus' ? '.styl' : _result;

    return _result;
  }
};
