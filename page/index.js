'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var PageGenerator = module.exports = function PageGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    // options
    this.useDashboard = this.options.dashboard || false;
    this.useTemplate = this.options.template || false;

    console.log('You called the page subgenerator with the argument ' + this.name + '.');
    console.log(this.options.template);
};

util.inherits(PageGenerator, yeoman.generators.NamedBase);

PageGenerator.prototype.files = function files() {
    this.template('page.jade', 'dev/markup/pages/' + this._.slugify(this.name.toLowerCase()) + '.jade');
};