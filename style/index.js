'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fileJSON = require(process.cwd() + '/.yo-rc.json')['generator-yeogurt'].config;
// var generatorUtils = require('../modules/util.js');

var StyleGenerator = module.exports = function StyleGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    // options
    this.useDashboard = this.options.dashboard || false;
    this.folder = this.options.folder || false;
    this.noImport = this.options.noImport || false;
    this.cssOption = fileJSON.cssOption;

    console.log('You called the style subgenerator with the argument ' + this.name + '.');
};

util.inherits(StyleGenerator, yeoman.generators.NamedBase);

StyleGenerator.prototype.files = function files() {
    if (!this.name) {
        console.log('Name cannot be empty. Operation aborted.');
        return;
    }
    if (this.folder) {
        if (this.cssOption === 'Less') {
            this.template('style.less', 'client/styles/' + this.folder + '/' + '_' + this._.slugify(this.name.toLowerCase()) + '.less');
        }
        else if (this.cssOption === 'Sass') {
            this.template('style.less', 'client/styles/' + this.folder + '/' + '_' + this._.slugify(this.name.toLowerCase()) + '.scss');
        }
        else {
            this.template('style.less', 'client/styles/' + this.folder + '/' + '_' + this._.slugify(this.name.toLowerCase()) + '.css');
        }
    }
    else {
        if (this.cssOption === 'Less') {
            this.template('style.less', 'client/styles/partials/' + '_' + this._.slugify(this.name.toLowerCase()) + '.less');
        }
        else if (this.cssOption === 'Sass') {
            this.template('style.less', 'client/styles/partials/' + '_' + this._.slugify(this.name.toLowerCase()) + '.scss');
        }
        else {
            this.template('style.less', 'client/styles/' + this._.slugify(this.name.toLowerCase()) + '.css');
        }
    }
};
