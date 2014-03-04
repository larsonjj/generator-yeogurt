'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var MarkupGenerator = module.exports = function MarkupGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    // options
    this.useDashboard = this.options.dashboard || false;
    this.markup = this.options.type || 'page';
    this.useTemplate = this.options.template || false;

    console.log('You called the markup subgenerator with the argument ' + this.name + '.');
};

util.inherits(MarkupGenerator, yeoman.generators.NamedBase);

MarkupGenerator.prototype.files = function files() {
    if (this.useTemplate && this.markup !== 'page') {
        console.log('The template option will be ignored as the type is not "page"');
    }
    if (this.markup === 'page' || this.markup === 'component' || this.markup === 'template' || this.markup === 'helper') {
        this.template('markup.jade', 'dev/markup/' + this.markup +'s/' + this._.slugify(this.name.toLowerCase()) + '.jade');
    }
    else if (!this.name) {
        console.log('Name cannot be empty. Operation aborted.');
    }
    else {
        console.log('Must use a supported type: page, template, helper, component. Operation aborted');
    }
};