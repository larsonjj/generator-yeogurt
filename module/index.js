'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fileJSON = require(process.cwd() + '/yeogurt.json');

var ModuleGenerator = module.exports = function ModuleGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    // options
    this.useDashboard = this.options.dashboard || false;
    this.useStyles = this.options.styles || true;
    this.useScripts = this.options.script || false;
    this.jsOption = fileJSON.jsOption;
    this.cssOption = fileJSON.jsOption;

    console.log('You called the module subgenerator with the argument ' + this.name + '.');
};

util.inherits(ModuleGenerator, yeoman.generators.NamedBase);

ModuleGenerator.prototype.files = function files() {
    if (this.name) {
        if (this.name !== 'all-modules') {
            this.template('module.jade', 'dev/markup/modules/' + this._.slugify(this.name.toLowerCase()) + '.jade');
            if (this.useStyles) {
                this.template('module.scss', 'dev/styles/modules/' + this._.slugify(this.name.toLowerCase()) + '.scss');
            }
            if (this.useScripts) {
                this.template('module.js', 'dev/scripts/modules/' + this._.slugify(this.name.toLowerCase()) + '.js');
            }
        } else {
            console.log('The all-modules file should not be overwritten. Operation aborted.');
        }
    }
    else {
        console.log('Name cannot be empty. Operation aborted.');
    }
};