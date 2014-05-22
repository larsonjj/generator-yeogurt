'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fileJSON = require(process.cwd() + '/.yo-rc.json')['generator-yeogurt'].config;

var StyleGenerator = module.exports = function StyleGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    // options
    this.useDashboard = this.options.dashboard || false;
    this.folder = this.options.folder || false;
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
        if (this.cssOption === 'LESS') {
            this.template('style.less', 'dev/styles/' + this.folder + '/' + '_' + this._.camelize(this.name) + '.less');
        }
        else if (this.cssOption === 'SCSS') {
            this.template('style.less', 'dev/styles/' + this.folder + '/' + '_' + this._.camelize(this.name) + '.scss');
        }
        else {
            this.template('style.less', 'dev/styles/' + this.folder + '/' + '_' + this._.camelize(this.name) + '.css');
        }
    }
    else {
        if (this.cssOption === 'LESS') {
            this.template('style.less', 'dev/styles/partials/' + '_' + this._.camelize(this.name) + '.less');
        }
        else if (this.cssOption === 'SCSS') {
            this.template('style.less', 'dev/styles/partials/' + '_' + this._.camelize(this.name) + '.scss');
        }
        else {
            this.template('style.less', 'dev/styles/' + this._.camelize(this.name) + '.css');
        }
    }
};