'use strict';

var _ = require('lodash');
var path = require('path');
var Generator = require('yeoman-generator');
var pjson = require(path.join(process.cwd(), './package.json'));
var config = pjson.config;
var directories = config.directories;
var copyTpl = require('../helpers/copy').copyTpl;

module.exports = class extends Generator {
  initializing() {
    var fileJSON = this.config.get('config');
    // Setup copy helpers
    this.copyTpl = copyTpl.bind(this);

    // options
    this.projectName = fileJSON.projectName;
    this.htmlOption = fileJSON.htmlOption;

    this.option('layout', {
      desc: 'Allow a custom layout for template to extend from',
      type: String,
      required: false
    });

    this.name = 'no-name';
    this.urlPath = '';
    if (this.arguments[0]) {
      this.name = this.arguments[0];
      this.urlPath = this.name.split('/').reduce((acc, ele, i) => {
        return acc + '../';
      }, '');
    }

    this.layout = 'base';
    if (this.options.layout) {
      this.layout = this.options.layout;
    }

    this.layoutDir = config ? directories.layouts : '_layouts';

    this.layoutFile = path.join(
      config
        ? path.join(directories.source, directories.layouts)
        : 'src/_layouts',
      this.name
    );

    this.pageFile = path.join(
      config ? path.join(directories.source) : 'src/',
      this.name.toLowerCase(),
      'index'
    );
  }

  writing() {
    const templateData = {
      _: _,
      name: this.name,
      urlPath: this.urlPath,
      layout: this.layout,
      layoutDir: this.layoutDir
    };

    if (this.htmlOption === 'pug') {
      this.copyTpl('page.pug', this.pageFile + '.pug', templateData);
    } else if (this.htmlOption === 'nunjucks') {
      this.copyTpl('page.nunjucks', this.pageFile + '.nunjucks', templateData);
    }
  }
};
