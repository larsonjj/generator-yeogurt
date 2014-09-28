'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var deleteFile = require('../helpers/delete-file');
var path = require('path');

var StyleGenerator = module.exports = function StyleGenerator() {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    var fileJSON = this.config.get('config');

    // options
    this.useDashboard = this.options.dashboard || false;
    this.delete = this.options.delete || '';
    this.cssOption = fileJSON.cssOption;
    this.sassSyntax = fileJSON.sassSyntax || 'scss';
    this.testFramework = fileJSON.testFramework;

};

util.inherits(StyleGenerator, yeoman.generators.NamedBase);

// Prompts
StyleGenerator.prototype.ask = function ask() {

    var createOrDelete = this.delete ? 'delete' : 'create';

    var done = this.async();
    var prompts = [{
        name: 'styleFile',
        message: 'Where would you like to ' + createOrDelete + ' this stylesheet?',
        default: 'client/styles'
    }];

    this.prompt(prompts, function(answers) {
        this.styleFile = path.join(answers.styleFile, '_' + this._.slugify(this.name.toLowerCase()));
        done();
    }.bind(this));
};

// Create files
StyleGenerator.prototype.files = function files() {
    if (!this.delete) {
        if (this.cssOption === 'less') {
            this.template('style.less', this.styleFile + '.less');
        }
        else if (this.cssOption === 'sass') {
            this.template('style.less', this.styleFile + '.' + this.sassSyntax);
        }
        else if (this.cssOption === 'stylus') {
            this.template('style.less', this.styleFile + '.styl');
        }
        else {
            this.template('style.less', this.styleFile + '.css');
        }
    }
    else {
        if (this.cssOption === 'less') {
            deleteFile(this.styleFile + '.less', this);
        }
        else if (this.cssOption === 'sass') {
            deleteFile(this.styleFile + '.' + this.sassSyntax, this);
        }
        else if (this.cssOption === 'stylus') {
            deleteFile(this.styleFile + '.styl', this);
        }
        else {
            deleteFile(this.styleFile + '.css', this);
        }
    }
};
