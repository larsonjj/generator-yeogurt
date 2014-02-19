'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fileJSON = require(process.cwd() + '/.yeogurtrc');

var ComponentGenerator = module.exports = function ComponentGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    // options
    this.useDashboard = this.options.dashboard || false;
    this.useStyles = this.options.styles || true;
    this.useScripts = this.options.styles || true;
    this.jsOption = fileJSON.jsOption;
    this.cssOption = fileJSON.jsOption;

    console.log('You called the component subgenerator with the argument ' + this.name + '.');
};

util.inherits(ComponentGenerator, yeoman.generators.NamedBase);

ComponentGenerator.prototype.files = function files() {
    if (this.name) {
        if (this.name !== 'all-components') {
            this.template('component.jade', 'dev/markup/components/' + this._.slugify(this.name.toLowerCase()) + '.jade');
            if (this.useStyles) {
                this.template('component.scss', 'dev/styles/components/' + this._.slugify(this.name.toLowerCase()) + '.scss');
            }
            if (this.useScripts) {
                this.template('component.js', 'dev/scripts/components/' + this._.slugify(this.name.toLowerCase()) + '.js');
            }
        } else {
            console.log('The all-components file should not be overwritten. Operation aborted.');
        }
    }
    else {
        console.log('Name cannot be empty. Operation aborted.');
    }
};