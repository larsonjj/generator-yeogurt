'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var TemplateGenerator = module.exports = function TemplateGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    // options
    this.useDashboard = this.options.dashboard || false;

    console.log('You called the template subgenerator with the argument ' + this.name + '.');
};

util.inherits(TemplateGenerator, yeoman.generators.NamedBase);

TemplateGenerator.prototype.files = function files() {
    if (this.name) {
        if (this.name !== 'base') {
            this.template('template.jade', 'dev/markup/templates/' + this._.slugify(this.name.toLowerCase()) + '.jade');
            this.template('template.scss', 'dev/styles/templates/' + this._.slugify(this.name.toLowerCase()) + '.scss');
        } else {
            console.log('The base template should not be overwritten. Operation aborted.');
        }
    }
    else {
        console.log('Name cannot be empty.');
    }
};