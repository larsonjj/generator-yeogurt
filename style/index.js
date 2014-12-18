'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var path = require('path');

var StyleGenerator = module.exports = function StyleGenerator() {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    var fileJSON = this.config.get('config');

    // options
    this.useDashboard = this.options.dashboard || false;
    this.cssOption = fileJSON.cssOption;
    this.sassSyntax = fileJSON.sassSyntax || 'scss';
    this.testFramework = fileJSON.testFramework;

};

util.inherits(StyleGenerator, yeoman.generators.NamedBase);

// Prompts
StyleGenerator.prototype.ask = function ask() {

    var prefix = this.cssOption === 'css' ? '' : '_';

    var done = this.async();
    var prompts = [{
        name: 'styleFile',
        message: 'Where would you like to create this stylesheet?',
        default: 'client/styles'
    }];


    this.prompt(prompts, function(answers) {
        this.styleFile = path.join(answers.styleFile, prefix + this._.slugify(this.name.toLowerCase()));
        done();
    }.bind(this));
};

// Create files
StyleGenerator.prototype.files = function files() {

    if (this.cssOption === 'less') {
        this.template('style.css', this.styleFile + '.less');
    }
    else if (this.cssOption === 'sass') {
        this.template('style.css', this.styleFile + '.' + this.sassSyntax);
    }
    else if (this.cssOption === 'stylus') {
        this.template('style.css', this.styleFile + '.styl');
    }
    else {
        this.template('style.css', this.styleFile + '.css');
    }

};
