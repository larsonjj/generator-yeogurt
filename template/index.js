'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fileJSON = require(process.cwd() + '/.yo-rc.json')['generator-yeogurt'].config;

var TemplateGenerator = module.exports = function TemplateGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    // options
    this.useDashboard = this.options.dashboard || false;
    this.useStyles = this.options.styles || false;
    this.useScripts = this.options.script || false;
    this.jsOption = fileJSON.jsOption;
    this.cssOption = fileJSON.jsOption;

    console.log('You called the template subgenerator with the argument ' + this.name + '.');
};

util.inherits(TemplateGenerator, yeoman.generators.NamedBase);

TemplateGenerator.prototype.files = function files() {
    if (this.name) {
        if (this.name !== 'base') {
            this.template('template.jade', 'dev/markup/templates/' + this._.slugify(this.name.toLowerCase()) + '.jade');
            if (this.useStyles) {
                this.template('template.scss', 'dev/styles/templates/' + this._.slugify(this.name.toLowerCase()) + '.scss');
            }
            if (this.useScripts) {
                this.template('template.js', 'dev/scripts/templates/' + this._.slugify(this.name.toLowerCase()) + '.js');
            }
        } else {
            console.log('The base template should not be overwritten. Operation aborted.');
        }
    }
    else {
        console.log('Name cannot be empty. Operation aborted.');
    }
};