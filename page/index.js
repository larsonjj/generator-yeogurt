'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fileJSON = require(process.cwd() + '/.yo-rc.json')['generator-yeogurt'].config;

var PageGenerator = module.exports = function PageGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    // options
    this.useDashboard = this.options.dashboard || false;
    this.useTemplate = this.options.template || false;
    this.useStyles = this.options.styles || true;
    this.useScripts = this.options.script || false;
    this.jsOption = fileJSON.jsOption;
    this.cssOption = fileJSON.jsOption;

    console.log('You called the page subgenerator with the argument ' + this.name + '.');
    console.log(this.options.template);
};

util.inherits(PageGenerator, yeoman.generators.NamedBase);

PageGenerator.prototype.files = function files() {
    if (this.name) {
        this.template('page.jade', 'dev/markup/pages/' + this._.slugify(this.name.toLowerCase()) + '.jade');
        if (this.useStyles) {
            this.template('page.scss', 'dev/styles/pages/' + this._.slugify(this.name.toLowerCase()) + '.scss');
        }
        if (this.useScripts) {
            this.template('page.js', 'dev/scripts/pages/' + this._.slugify(this.name.toLowerCase()) + '.js');
        }
    }
    else {
        console.log('Name cannot be empty. Operation aborted.');
    }
};